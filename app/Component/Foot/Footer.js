import { Box } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Box backgroundColor={"green.600"}>
      <Box
        maxWidth={"1280px"}
        margin={"0 auto"}
        paddingY={"3rem"}
        paddingX={{ base: "2rem", sm: "0" }}
      ></Box>
    </Box>
  );
}
