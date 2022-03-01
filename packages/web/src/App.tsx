import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Directory from "@/views/Directory";
import Details from "@/views/Details";
import NotFound from "@/views/NotFound";
import './App.css'

/**
 * @todo Context is used to pass around UUID wo/using URL params. There are better ways w/more time.
 */
export const StoreContext = createContext<any>(null);

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Directory />} />
          <Route path="/:country" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
