import { Text, Heading, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Heading p={2} color="primary">
        <Link to="/">
          <Text
            _hover={{
              opacity: "50%",
              transition: "0.25s",
            }}
          >
            Forests
          </Text>
        </Link>
      </Heading>
      <Divider />
    </>
  );
}
