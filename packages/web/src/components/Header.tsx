import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Heading borderBottom={"1px"}>
      <Link to="/">Forests</Link>
    </Heading>
  );
}
