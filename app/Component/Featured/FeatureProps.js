import { Box, Text } from "@chakra-ui/react";
import React from "react";
import PropertySlider from "./PropertySlider";

export default function FeatureProps() {
  return (
    <Box backgroundColor={"green.50"}>
      <Box
        maxWidth={"1280px"}
        margin={"0 auto"}
        color={"gray.600"}
        paddingY={{ base: "3rem", sm: "6rem" }}
      >
        <Text
          fontSize={{ base: "4xl", sm: "5xl" }}
          lineHeight={"shorter"}
          fontWeight={"light"}
          paddingX={"2rem"}
          textAlign={"center"}
        >
          Discover Our Featured Listings
        </Text>
        <Text
          fontSize={"2xl"}
          fontWeight={"light"}
          marginTop={"1rem"}
          marginBottom={"3rem"}
          paddingX={"2rem"}
          textAlign={"center"}
        >
          A selection of our best properties
        </Text>
        <PropertySlider featuredProperties={1}/>
      </Box>
    </Box>
  );
}
