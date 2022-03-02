import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaChartArea, FaLayerGroup } from "react-icons/fa";
import { GiPineTree } from "react-icons/gi";
import {
  Flex,
  Badge,
  Stack,
  Icon,
  Text,
  Skeleton,
  Image,
  Heading,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";
import Layout from "@/components/Layout";
import NotFound from "@/views/NotFound";

interface CustomStatProps {
  icon: any;
  label: string;
  unit: string;
  value: any;
}

export default function Details() {
  /**
   * @todo useReducer
   */
  const [forest, setForest] = useState<Forest>();
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const { country } = useParams();

  const forestTypeTagColorScheme = () => {
    /**
     * @todo generalize
     */
    return forest?.type === "conservation" ? "green" : "telegram";
  };

  useEffect(() => {
    const fetchForest = async () => {
      const response = await fetch(`http://localhost:8000/forest/${country}`);
      const data = await response.json();
      response.status === 404 && setNotFound(true);
      setForest(data);
      setLoading(false);
    };
    fetchForest();
  }, []);

  const stats: CustomStatProps[] = [
    {
      label: "Carbon Stored ",
      value: forest?.carbon_stored.toLocaleString(),
      icon: GiPineTree,
      unit: "CO2e",
    },
    {
      label: "30-day change in Carbon",
      value: forest?.change_in_30_days.toLocaleString(),
      icon: FaChartArea,
      unit: "CO2e",
    },
    {
      label: "Covered Area",
      value: forest?.covered_area.toLocaleString(),
      icon: FaLayerGroup,
      unit: "hectare",
    },
  ];

  const CustomStat = ({ icon, unit, label, value }: CustomStatProps) => {
    return (
      <Stat>
        <Icon as={icon} />
        <StatLabel>{label}</StatLabel>
        <StatNumber>{value}</StatNumber>
        <StatHelpText>{unit}</StatHelpText>
      </Stat>
    );
  };

  if (notFound) return <NotFound badRoute={country!} />;

  return (
    <Layout>
      <Link to="/">
        <Flex
          direction="row"
          align="center"
          justifyItems={"center"}
          color="darkslategrey"
          _hover={{
            opacity: "50%",
            transition: "0.25s",
          }}
        >
          <Icon as={AiOutlineArrowLeft} marginRight={1} />
          <Text>Continue exploring</Text>
        </Flex>
      </Link>

      <Flex
        direction={["column", null, null, null, "row"]}
        alignItems="center"
        justify="space-between"
        color="darkslategrey"
      >
        <Flex
          direction="column"
          justifyContent={"space-between"}
          width={["100%", null, null, "50%"]}
        >
          <Heading
            fontSize={["5xl", "8xl"]}
            paddingBlock={4}
            textTransform="capitalize"
          >
            {forest?.country}
          </Heading>
          <Badge
            maxW="fit-content"
            alignSelf={"self-start"}
            colorScheme={forestTypeTagColorScheme()}
          >
            {forest?.type}
          </Badge>
          <Stack paddingBlock={4}>
            <Text fontSize={"2xl"} w="90%" fontWeight={"semibold"}>
              {forest?.long_description}
            </Text>
          </Stack>
          <StatGroup flexDirection={"row"} padding={10}>
            {stats.map(({ icon, label, value, unit }, index) => {
              return (
                <CustomStat
                  key={index}
                  icon={icon}
                  label={label}
                  value={value}
                  unit={unit}
                />
              );
            })}
          </StatGroup>
        </Flex>
        <Skeleton isLoaded={!loading}>
          <Image src={forest?.image_url} maxW="50vw" alt="A Forest" />
        </Skeleton>
      </Flex>
    </Layout>
  );
}
