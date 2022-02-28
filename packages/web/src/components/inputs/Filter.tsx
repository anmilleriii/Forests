// import { Stack, RadioGroup, Radio } from "@chakra-ui/react";
import { useState } from "react";
import { Stack, Select, Badge, chakra } from "@chakra-ui/react";
// badge?
export default function Filter() {
  const tagOptions: ForestType[] = ["conservation", "reforestation"];
  const [selectedTags, setSelectedTags] = useState<ForestType[] | null>(
    tagOptions
  );

  const handleOnChange = (e) => {
    setSelectedTags(() => e);
  };

  return (
    <Stack>
      <Select placeholder="Type" onChange={handleOnChange}>
        {tagOptions.map((tagOption, index) => (
          <chakra.option
            textTransform="capitalize"
            key={index}
            value={tagOption}
          >
            {tagOption}
          </chakra.option>
        ))}
      </Select>
      <Badge>{selectedTags}</Badge>
    </Stack>
  );
}
