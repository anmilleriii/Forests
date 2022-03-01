import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NotFound from "@/views/NotFound";

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
        {/* <NotFound badRoute={country!} /> */}
        <Flex direction="row" alignItems="center" justify="space-between">
          <Flex direction="column">
            <Heading fontSize="8xl" textTransform="capitalize">
              {forest?.country}
            </Heading>
            <Box>
              <Text>{forest?.long_description}</Text>
              <Text>
                {forest?.carbon_stored}
                {forest?.change_in_30_days}
                {forest?.covered_area}
                {forest?.image_url}
                {forest?.covered_area}
              </Text>
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
