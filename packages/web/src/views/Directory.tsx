import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Text, Wrap, Stack } from "@chakra-ui/react";
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
      try {
        const response = await fetch("http://localhost:8000/forest");
        const data = await response.json();
        setForests(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchForests();
  }, []);

  const handleTagSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTag(e.target.value as ForestType | "All");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredForests = forests.filter((forest) =>
    forest.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const Cards = () => {
    return (
      <>
        {filteredForests.map(
          ({ image_url, country, type, short_description }, index) => (
            <Link to={country.toLowerCase().replaceAll(" ", "-")}>
              <Card
                loading={loading}
                key={index}
                title={country}
                body={short_description}
                imageUrl={image_url}
                type={type}
              />
            </Link>
          )
        )}
      </>
    );
  };

  return (
    <Layout>
      <Box p={8}>
        <Text paddingBottom={3} lineHeight={"taller"} size="sm">
          Explore forest restoration projects around the world.
        </Text>
        <Flex
          w={"75%"}
          direction={["column", null, "row"]}
          justify={["center", "space-between"]}
          alignItems={"center"}
          p="2%"
        >
          <Search onChange={(e) => handleSearchChange(e)} />
          <Stack>
            <Filter onTagSelect={(e) => handleTagSelect(e)} />
          </Stack>
        </Flex>
        <Flex direction={"row"}>
          <Wrap>
            {filteredForests.length > 0 ? (
              <Cards />
            ) : (
              !loading && <Text>No results for {searchQuery}.</Text>
            )}
          </Wrap>
        </Flex>
      </Box>
    </Layout>
  );
}
