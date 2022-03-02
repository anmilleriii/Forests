import { Flex, Box } from "@chakra-ui/react";
import Header from "@/components/Header";

export default function Layout({ children }: any) {
  return (
    // <Flex direction="column" h="100vh" bgGradient="linear(to-tl, rgba(51, 118, 92, 0.5) 30%, rgba(101, 169, 143, 0.2))">
    <Flex direction="column" h="100vh">
      <Header />
      <Box p={[2, 8]}>{children}</Box>
    </Flex>
  );
}
