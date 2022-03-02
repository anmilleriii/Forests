import { Link } from "react-router-dom";
import {
  Center,
  Box,
  Image,
  Flex,
  Heading,
  Text,
  Badge,
  Skeleton,
} from "@chakra-ui/react";

interface CardProps {
  loading: boolean;
  title: string;
  type: ForestType;
  imageUrl: string;
  body: string;
}

export default function Card({
  loading,
  title,
  type,
  imageUrl,
  body,
}: CardProps) {
  const forestTypeTagColorScheme = () => {
    /**
     * @todo generalize
     */
    return type === "conservation" ? "green" : "telegram";
  };

  return (
    <Center>
      <Box
        p="5"
        paddingTop="1"
        margin="5"
        maxW={["100%", null, null, "400px"]}
        borderWidth="1px"
        borderRadius="sm"
        color="primary"
        _hover={{
          opacity: "50%",
          transition: "0.25s",
        }}
      >
        <Link to={title.toLowerCase().replaceAll(" ", "-")}>
          <Flex minHeight="375px" direction="column" justify="space-between">
            <Heading
              lineHeight="taller"
              fontSize="3xl"
              fontWeight="bold"
              textTransform="capitalize"
            >
              {title}
            </Heading>
            <Skeleton isLoaded={!loading}>
              <Image borderRadius="sm" src={imageUrl} width="100%" />
            </Skeleton>
            <Text mt="2" fontSize="md" fontWeight="semibold" lineHeight="short">
              {body}
            </Text>
            <Badge
              maxW="fit-content"
              alignSelf={"self-end"}
              colorScheme={forestTypeTagColorScheme()}
            >
              {type}
            </Badge>
          </Flex>
        </Link>
      </Box>
    </Center>
  );
}
