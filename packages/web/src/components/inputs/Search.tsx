import { Input, FormControl, FormLabel } from "@chakra-ui/react";

interface SearchProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

/**
 * @todo would add a suggestions list
 * @todo would query from database as well instead of just filtering state
 * @todo would use fuzzy search instead of exact
 * @todo faster algorithm (e.g., Boyer-Moore)
 */
export default function Search({ onChange }: SearchProps) {
  return (
    <FormControl w={["2xs"]} paddingBottom={4} >
      <FormLabel color={"primary"} htmlFor="search" paddingBottom={1}>
        Search forests by country
      </FormLabel>
      <Input
        id="text"
        type="text"
        placeholder="e.g., Taiwan"
        onChange={onChange}
      />
    </FormControl>
  );
}
