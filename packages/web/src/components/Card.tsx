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
        maxW="320px"
        borderWidth="1px"
        borderRadius="sm"
        color="darkslategrey"
      >
        <Flex minHeight="320px" direction="column" justify="space-between">
          <Heading fontSize="3xl" fontWeight="bold" textTransform="capitalize">
            {title}
          </Heading>
          <Skeleton isLoaded={!loading}>
            <Image borderRadius="sm" src={imageUrl} />
          </Skeleton>
          <Text mt={2} fontSize="md" fontWeight="semibold" lineHeight="short">
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
      </Box>
    </Center>
  );
}
