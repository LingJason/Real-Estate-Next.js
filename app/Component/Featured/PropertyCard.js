import React from "react";
import usePropertyFormat from "../Hooks/usePropertyFormat";
import { Box } from "@chakra-ui/react";

function PropertyCard(props) {
  const {
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    room,
    bath,
    purpose,
    sq,
    externalID,
  } = usePropertyFormat(props);

  return (
    <Box 
      marginBottom={"4rem"} 
      backgroundColor={"#fff"}>
      <Box
        height={"250px"}
        backgroundPosition={"center center"}
        backgroundSize={"cover"}
        position={"relative"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      ></Box>
    </Box>
  );
}

export default PropertyCard;
