import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Center, Wrap } from "@chakra-ui/react";
import Search from "@/components/inputs/Search";
import Filter from "@/components/inputs/Filter";
import Card from "@/components/Card";
/**
 * fetch forests
 * display cards
 *
 */

export default function Directory() {
  const [forests, setForests] = useState<Forest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchForests = async () => {
      try {
        const response = await fetch("http://localhost:8000/forest?limit=10");
        const data = await response.json();
        console.log(data);
        setForests(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchForests();
  }, []);

  return (
    <>
      <Flex w={"xl"} direction={"row"}>
        <Search />
        <Filter />
      </Flex>
      <Flex direction={"row"}>
        <Wrap>
          {forests.map(
            ({ image_url, country, type, short_description }, index) => (
              <Link to={country.toLowerCase().replaceAll(" ", "-")}>
                <Card
                  key={index}
                  title={country}
                  body={short_description}
                  imageUrl={image_url}
                  type={type}
                />
              </Link>
            )
          )}
        </Wrap>
      </Flex>
    </>
  );
}
