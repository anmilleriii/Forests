import {
  Center,
  Box,
  Image,
  Flex,
  Heading,
  Text,
  Badge,
} from "@chakra-ui/react";

export default function Card() {
  return (
    <Center h="100v%">
      <Box p="5" maxW="320px" borderWidth="1px">
        <Flex direction="column" align={""} justify="space-between">
          <Heading mt={2} fontSize="xl" fontWeight="semibold">
            United States
          </Heading>
          <Image
            borderRadius="md"
            src="https://images.unsplash.com/photo-1568864453925-206c927dab0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          />
          <Text mt={2} fontSize="md" fontWeight="semibold" lineHeight="short">
            Protecting the fall foliage in Maine.
          </Text>
          <Badge maxW="fit-content" colorScheme="green">
            Plus
          </Badge>
        </Flex>
      </Box>
    </Center>
  );
}
