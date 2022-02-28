import { Center, Flex } from "@chakra-ui/react";
import Header from "@/components/Header";

export default function Layout({ children }: any) {
  return (
    <Center>
      <Flex direction="column">
        <Header />
        {children}
      </Flex>
    </Center>
  );
}
