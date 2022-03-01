import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Text, Wrap } from "@chakra-ui/react";
import Search from "@/components/inputs/Search";
import Filter from "@/components/inputs/Filter";
import Card from "@/components/Card";
import Layout from "@/components/Layout";
/**
 * fetch forests
 * display cards
 *
 */

export default function Directory() {
  const [forests, setForests] = useState<Forest[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

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

  /**
   * @todo add loading sekeletons
   * @todo add filter select tags/badges
   * @todo add detail page
   * @todo
   * @todo filter search query database side
   * @todo loading sekeleton
   */

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
    // const searchQuery = e.target.value.toLowerCase();
    // const temp = forests.filter((forest) =>
    //   forest.country.toLowerCase().includes(searchQuery)
    // );
    // setFilteredForests(temp);
  };

  return (
    <Layout>
      <Box p={8}>
        <Text paddingBottom={3} lineHeight={"taller"} size="sm">
          Explore forest restoration projects around the world.
        </Text>
        <Flex w={"xl"} direction={"row"}>
          <Search onChange={(e) => handleSearchChange(e)} />
          <Filter />
        </Flex>
        <Flex direction={"row"}>
          <Wrap>
            {forests
              .filter((forest) =>
                forest.country.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map(({ image_url, country, type, short_description }, index) => (
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
              ))}
          </Wrap>
        </Flex>
      </Box>
    </Layout>
  );
}
