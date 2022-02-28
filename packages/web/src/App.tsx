import { ChakraProvider , Box, Select} from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider>
      <Box>ff</Box>
      <Select>asdf</Select>
      <div className="red">asdf</div>
    </ChakraProvider>
  );
}
