import { createContext, useState, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Directory from "@/views/Directory";
import Details from "@/views/Details";
import NotFound from "@/views/NotFound";

/**
 * @todo Context is used to pass around UUID wo/using URL params. There are better ways w/more time.
 */
export const StoreContext = createContext<any>(null);

export default function App() {
  const [activeForestUuid, setActiveForestUuid] = useState<string>("");
  const storeValue = useMemo<any>(
    () => ({
      activeForestUuid,
      setActiveForestUuid,
    }),
    [activeForestUuid]
  );

  return (
    <ChakraProvider>
      <StoreContext.Provider value={storeValue}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Directory />} />
            <Route path="/:forestCountry" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </StoreContext.Provider>
    </ChakraProvider>
  );
}
