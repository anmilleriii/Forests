import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Divider, Text, Wrap, Stack } from "@chakra-ui/react";
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
        const response = await fetch("http://localhost:8000/forest?limit=10");
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
    // @ts-ignore
    setSelectedTag(e.target.value.length > 0 ? e.target.value : "All");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredForests = forests.filter((forest) => {
    // console.log(selectedTag);
    // if (selectedTag != "All") {
    //   if (forest.type != selectedTag.toLowerCase()) {
    //     return false;
    //   }
    // }
    // if (selectedTag != "All" && forest.type != selectedTag.toLowerCase()) return false;

    console.log(selectedTag);
    if (selectedTag != "All") {
      if (forest.type != selectedTag.toLowerCase()) {
        return false;
      }
    }

    if (searchQuery.length > 0) {
      return forest.country.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return true;

    // if (selectedTag != "All" && forest.type != selectedTag.toLowerCase()) return false;
    // return searchQuery.length > 0
    //   ? forest.country.toLowerCase().includes(searchQuery.toLowerCase())
    //   : true;
  });

  const Cards = () => {
    return (
      <>
        {filteredForests.map(
          ({ image_url, country, type, short_description }, index) => (
            <Link key={index} to={country.toLowerCase().replaceAll(" ", "-")}>
              <Card
                loading={loading}
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
      <Box w={"75%"} paddingLeft={5}>
        <Text
          lineHeight={"taller"}
          fontWeight="semibold"
          color="darkslategray"
          fontSize="xl"
        >
          Explore forest restoration projects around the world.
        </Text>
        <Flex
          direction={["column", null, "row"]}
          justify={["center", "space-between"]}
          alignItems={"center"}
          padding="2% 2% 1% 2%"
        >
          <Search onChange={(e) => handleSearchChange(e)} />
          <Stack>
            <Filter onTagSelect={(e) => handleTagSelect(e)} />
          </Stack>
        </Flex>
        <Divider />
      </Box>
      <Flex direction={"row"}>
        <Wrap>
          {filteredForests.length > 0 ? (
            <Cards />
          ) : (
            !loading && <Text>No results for {searchQuery}.</Text>
          )}
        </Wrap>
      </Flex>
    </Layout>
  );
}
