import { Input, FormControl, FormLabel } from "@chakra-ui/react";

export default function Search() {
  return (
    <FormControl>
      <FormLabel htmlFor="email">Search forests by country</FormLabel>
      <Input id="text" type="text" />
    </FormControl>
  );
}
