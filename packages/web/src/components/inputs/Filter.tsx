// import { Stack, RadioGroup, Radio } from "@chakra-ui/react";
import { useState } from "react";
import { Stack, Select, Badge, chakra, CloseButton } from "@chakra-ui/react";
// badge?
export default function Filter() {
  const tagOptions: ForestType[] = ["conservation", "reforestation"];
  const [selectedTags, setSelectedTags] = useState<ForestType[] | null>(
    tagOptions
  );

  const handleTagSelect = (e) => {
    setSelectedTags(() => e);
  };

  return (
    <Stack>
      <Select placeholder="All" onSelect={handleTagSelect}>
        {tagOptions.map((tagOption, index) => (
          <chakra.option
            textTransform={"uppercase"}
            key={index}
            value={tagOption}
          >
            {tagOption}
          </chakra.option>
        ))}
      </Select>
      <Badge>asdf
        <CloseButton size="sm" />
      </Badge>
    </Stack>
  );
}
