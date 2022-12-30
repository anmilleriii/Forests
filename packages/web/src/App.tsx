import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/design/theme";
import Directory from "@/views/Directory";
import Details from "@/views/Details";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Directory />} />
          <Route path="/:country" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
