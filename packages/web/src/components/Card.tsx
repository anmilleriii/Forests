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
  const forestTypeTagColorScheme = () => {
    /**
     * @todo generalize
     */
    return type === "conservation" ? "green" : "telegram";
  };

  return (
    <Center>
{/* maxW={["75%", "25%"]} */}
      <Box p="5"  borderWidth="1px" borderRadius="sm">
        <Flex direction="column" align={""} justify="space-between">
          <Flex direction="row" justify="space-between" align="center">
            <Heading marginBlock="xl" fontSize="xl" fontWeight="semibold">
              {title}
            </Heading>
          </Flex>
          <Image borderRadius="sm" src={imageUrl} />
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
