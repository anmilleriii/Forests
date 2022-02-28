import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Directory from "@/views/Directory";
import Layout from "@/components/Layout";
import Details from "@/views/Details";
import NotFound from "@/views/NotFound";

export default function App() {
  return (
    <ChakraProvider>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Directory />} />
            <Route path="/:country" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ChakraProvider>
  );
}
