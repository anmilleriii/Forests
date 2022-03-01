import { useState } from "react";
import { Stack, Select, Badge, CloseButton } from "@chakra-ui/react";

interface FilterProps {
  onTagSelect: React.ChangeEventHandler<HTMLSelectElement>;
}

export default function Filter({ onTagSelect }: FilterProps) {
  const tagOptions: ForestType[] = ["Conservation", "Reforestation"];

  return (
    <Stack>
      <Select w="3xs" color="darkslategrey" placeholder="All" onChange={onTagSelect}>
        {tagOptions.map((tagOption, index) => (
          <option key={index} value={tagOption}>
            {tagOption}
          </option>
        ))}
      </Select>
    </Stack>
  );
}
