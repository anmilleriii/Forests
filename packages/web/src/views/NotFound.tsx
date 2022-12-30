import Layout from "@/components/Layout";
import { Box, Text } from "@chakra-ui/react";
interface NotFoundProps {
  badRoute: string;
}

export default function NotFound({ badRoute }: NotFoundProps) {
  return (
    <Layout>
      <Box>
        <Text p={10}>
          The forest project you are looking for is not in <b>{badRoute}</b>{" "}
          yet, but you can start planting!
        </Text>
      </Box>
    </Layout>
  );
}
