import { useState, useEffect } from "react";
import { Flex, Box, Divider, Text, Center, Stack } from "@chakra-ui/react";
import Search from "@/components/inputs/Search";
import Filter from "@/components/inputs/Filter";
import Card from "@/components/Card";
import Layout from "@/components/Layout";

export default function Directory() {
  const [forests, setForests] = useState<Forest[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<ForestType | "All">("All");

  useEffect(() => {
    const fetchForests = async () => {
      /**
       * @todo didn't get to pagination
       */
      const response = await fetch("http://localhost:8000/forest?limit=10");
      const data = await response.json();
      setForests(data);
      setLoading(false);
    };
    fetchForests();
  }, []);

  const handleTagSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // @ts-ignore
    setSelectedTag(e.target.value.length > 0 ? e.target.value : "All");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredForests = forests.filter((forest) => {
    if (selectedTag != "All") {
      if (forest.type != selectedTag.toLowerCase()) {
        return false;
      }
    }
    if (searchQuery.length > 0) {
      return forest.country.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;
  });

  const Cards = () => {
    return (
      <>
        {filteredForests.map(
          ({ image_url, country, type, short_description }, index) => (
            <Card
              key={index}
              loading={loading}
              title={country}
              body={short_description}
              imageUrl={image_url}
              type={type}
            />
          )
        )}
      </>
    );
  };

  return (
    <Layout>
      <Box>
        <Text
          paddingLeft={"2%"}
          paddingBottom={1}
          textAlign={["center", "inherit"]}
          lineHeight={"tall"}
          fontWeight="semibold"
          color="darkslategray"
          fontSize="xl"
        >
          Explore forest restoration projects around the world.
        </Text>
        <Flex
          direction={["column", null, "row"]}
          justify={["center", "space-between"]}
          alignItems={"space-between"}
          padding="2% 2% 1% 2%"
        >
          <Search onChange={(e) => handleSearchChange(e)} />

          <Filter onTagSelect={(e) => handleTagSelect(e)} />
        </Flex>
        <Divider />
      </Box>
      <Center>
        
      <Flex w={["100%", null, null, null, "85%"]} direction="row" flexWrap={"wrap"}  justifyContent="space-evenly">
        {filteredForests.length == 0 && searchQuery.length == 0 ? (
          <Text>No forests to explore at the moment.</Text>
        ) : filteredForests.length == 0 && searchQuery.length > 0 ? (
          <Text color="">No results for {searchQuery}.</Text>
        ) : (
          <Cards />
        )}
      </Flex>
      </Center>
    </Layout>
  );
}
