import { useState } from "react";
import {
  FormControl,
  Select,
  Badge,
  CloseButton,
  FormLabel,
} from "@chakra-ui/react";

interface FilterProps {
  onTagSelect: React.ChangeEventHandler<HTMLSelectElement>;
}

export default function Filter({ onTagSelect }: FilterProps) {
  const tagOptions: ForestType[] = ["Conservation", "Reforestation"];

  return (
    <FormControl w={["2xs"]} paddingBottom={4}>
      <FormLabel htmlFor="filter" color={"primary"} paddingBottom={1}>
        Filter by project type
      </FormLabel>
      <Select
        w="3xs"
        color="primary"
        placeholder="All"
        onChange={onTagSelect}
      >
        {tagOptions.map((tagOption, index) => (
          <option key={index} value={tagOption}>
            {tagOption}
          </option>
        ))}
      </Select>{" "}
    </FormControl>
  );
}
