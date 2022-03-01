import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaChartArea, FaLayerGroup } from "react-icons/fa";
import { BsFillLayersFill } from "react-icons/bs";
import { GiPineTree, GiTreeBranch } from "react-icons/gi";
import { SiLinktree } from "react-icons/si";
import { CgTrees } from "react-icons/cg";
import {
  Flex,
  Box,
  Center,
  Text,
  Wrap,
  Skeleton,
  Image,
  Heading,
} from "@chakra-ui/react";
import Layout from "@/components/Layout";
import NotFound from "@/views/NotFound";

export default function Details() {
  /**
   * @todo useReducer
   */
  const [forest, setForest] = useState<Forest>();
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const { country } = useParams();

  useEffect(() => {
    const fetchForest = async () => {
      const response = await fetch(`http://localhost:8000/forest/${country}`);
      const data = await response.json();

      if (response.status === 404) {
        setNotFound(true);
        return;
      }

      setForest(data);
      setLoading(false);
    };
    fetchForest();
  }, []);

  if (notFound) return <NotFound badRoute={country!} />;

  return (
    <Layout>
      <Box>
        <Link to="/">
          <Text
            color="darkslategrey"
            _hover={{
              opacity: "50%",
              transition: "0.25s",
            }}
          >
            <AiOutlineArrowLeft />
            Back to directory
          </Text>
        </Link>
        <Flex
          direction="row"
          alignItems="center"
          justify="space-between"
          color="darkslategrey"
        >
          <Flex direction="column">
            <Heading fontSize="8xl" textTransform="capitalize">
              {forest?.country}
            </Heading>
            <Box>
              <Text>{forest?.long_description}</Text>
              <GiPineTree />
            </Box>
            <Box>
              <Text>Carbon Stored (CO2e)</Text>
              <Text>{forest?.carbon_stored}</Text>
              <GiPineTree />
            </Box>
            <Box>
              <Text>30-day change in Carbon Stored (CO2e)</Text>
              <Text>{forest?.change_in_30_days}</Text>
              <FaChartArea />
            </Box>
            <Box>
              <Text>Covered Area (hectare)</Text>
              <Text>{forest?.change_in_30_days}</Text>
              <FaChartArea />
            </Box>
          </Flex>
          <Flex direction="column">
            <Skeleton isLoaded={!loading}>
              <Image src={forest?.image_url} alt="asdf" />
            </Skeleton>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
}

// <Text>{forest?.carbon_stored}</Text>
// <Text>{forest?.long_description}</Text>
// <Text>

//   {forest?.change_in_30_days}
//   {forest?.covered_area}
//   {forest?.image_url}
//   {forest?.covered_area}
// <GiPineTree />
// <SiLinktree />
// <FaChartArea />
// <FaLayerGroup />
