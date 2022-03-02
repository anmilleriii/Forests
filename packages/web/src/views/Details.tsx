import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
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

  /**
   * @todo generalize
   */
  const forestTypeTagColorScheme = () => {
    // @ts-ignore
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

  const roundToDecimals = (n: number): number => {
    // @ts-ignore
    return Number(Math.round(n + "e2") + "e-2");
  };

  const stats: CustomStatProps[] = [
    {
      label: "Carbon Stored ",
      value: forest?.carbon_stored?.toLocaleString(),
      icon: GiPineTree,
      unit: "CO2e",
    },
    {
      label: "30-day change in Carbon stored",
      value: forest?.change_in_30_days?.toLocaleString(),
      icon: FaChartArea,
      unit: "CO2e",
    },
    {
      label: "Covered Area",
      value: forest?.covered_area?.toLocaleString(),
      icon: FaLayerGroup,
      unit: "hectare",
    },
    {
      label: "Location",
      // @ts-ignore
      value: `${roundToDecimals(forest?.longitude)}, ${roundToDecimals(
        // @ts-ignore
        forest?.latitude
      )}`,
      icon: BiWorld,
      unit: "° lat, ° long",
    },
  ];

  const CustomStat = ({ icon, unit, label, value }: CustomStatProps) => {
    return (
      <Stat paddingInline={5} margin="2" minWidth="fit-content">
        <Icon as={icon} />
        <StatLabel maxWidth="125px">{label}</StatLabel>
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
          paddingBlock={2}
          direction="row"
          align="center"
          justifyItems={"center"}
          color="primary"
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
        direction={["column", null, null, null, null, "row"]}
        alignItems={["center", null, null, null, null, "flex-start"]}
        justify="space-between"
        color="primary"
      >
        <Flex
          direction="column"
          justifyContent={"space-between"}
          width={[null, null, null, null, "100%", "50%"]}
          padding={10}
        >
          <Heading
            paddingBlock={1}
            fontSize={["5xl", "8xl"]}
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
          <Stack paddingBlock={10}>
            <Text fontSize={["2xl", "3xl"]} w="90%" fontWeight={"semibold"}>
              {forest?.long_description}
            </Text>
          </Stack>
          <StatGroup flexDirection={"row"} padding={5}>
            <Flex
              direction="row"
              flexWrap="wrap"
              justifyContent={"space-between"}
            >
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
            </Flex>
          </StatGroup>
        </Flex>
        <Skeleton isLoaded={!loading}>
          <Image
            p={1}
            src={forest?.image_url}
            maxW={[null, null, null, null, "90vw", "50vw"]}
            alt="A Forest"
          />
        </Skeleton>
      </Flex>
    </Layout>
  );
}
