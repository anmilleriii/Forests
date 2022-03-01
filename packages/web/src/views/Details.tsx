import { useState, useEffect, useContext } from "react";
// import { StoreContext } from "@/App";
import { useParams } from "react-router-dom";

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
  const [forest, setForest] = useState<Forest>();
  const { country } = useParams();

  // const { activeForestUuid } = useContext(StoreContext);

  useEffect(() => {
    const fetchForest = async () => {
      try {
        console.log("fetching");
        const response = await fetch(
          // `http://localhost:8000/forest/${activeForestUuid}`
          `http://localhost:8000/forest/${country}`
        );
        const data = await response.json();
        setForest(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchForest();
  }, []);

  return (
    <Layout>
      <Box>
        <Flex>
          <Flex>
            <Heading>
              {forest?.country ? forest?.country : <Skeleton />}
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
          <Flex>
            <Image src={forest?.image_url} alt="asdf" />
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
}
