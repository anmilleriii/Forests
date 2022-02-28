import { useState, useEffect } from "react";
import { Flex, Box, Center, Wrap } from "@chakra-ui/react";
import Header from "@/components/Header";
import Search from "@/components/inputs/Search";
import Filter from "@/components/inputs/Filter";
import Card from "@/components/Card";
/**
 * fetch forests
 * display cards
 *
 */

export default function Directory() {
  return (
    <Center>
      <Flex direction={"column"}>
        <Header />
        <Flex w={"xl"} direction={"row"}>
          <Search />
          <Filter />
        </Flex>
        <Flex direction={"row"}>
          <Wrap>
            <Card />

            <Box bg={"red"} boxSize={"xl"}>
              Card here
            </Box>
            <Box bg={"blue"} boxSize={"xl"}>
              Card here
            </Box>
            <Box bg={"green"} boxSize={"xl"}>
              Card here
            </Box>
          </Wrap>
        </Flex>
      </Flex>
    </Center>
  );
}
