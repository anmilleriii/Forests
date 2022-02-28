import {
  Center,
  Box,
  Image,
  Flex,
  Heading,
  Text,
  Badge,
} from "@chakra-ui/react";

interface CardProps {
  title: string;
  type: ForestType;
  imageUrl: string;
  body: string;
}

export default function Card({ title, type, imageUrl, body }: CardProps) {
  return (
    <Center h="100v%">
      <Box p="5" maxW="320px" borderWidth="1px">
        <Flex direction="column" align={""} justify="space-between">
          <Heading mt={2} fontSize="xl" fontWeight="semibold">
            {title}
          </Heading>
          <Image borderRadius="md" src={imageUrl} />
          <Text mt={2} fontSize="md" fontWeight="semibold" lineHeight="short">
            {body}
          </Text>
          <Badge maxW="fit-content" colorScheme="green">
            {type}
          </Badge>
        </Flex>
      </Box>
    </Center>
  );
}
