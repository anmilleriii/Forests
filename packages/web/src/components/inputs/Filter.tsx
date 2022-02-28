import { Stack, RadioGroup, Radio } from "@chakra-ui/react";
// badge?
export default function Filter() {
  return (
    <Stack>
      <RadioGroup>
        <Radio>all</Radio>
        <Radio>conservation</Radio>
        <Radio>reforestation</Radio>
      </RadioGroup>
    </Stack>
  );
}
