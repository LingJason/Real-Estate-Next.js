"use client"
import Navbar from "./Component/Nav/Navbar";
import Footer from "./Component/Foot/Footer";
import { ChakraProvider, Box, Text } from "@chakra-ui/react";
import FeatureProps from "./Component/Featured/FeatureProps";
export default function Home() {
  return (
    <>
    <ChakraProvider>
    <Navbar/>
    <Box
    position={"relative"}
    minHeight={{base: "110vh"}}
    backgroundPosition={"center"}
    backgroundSize={"cover"}
    backgroundAttachment={"fixed"}
    backgroundImage={"/homepageimage.jpg"}
    >
      <Box
      position={"absolute"}
      width={"100%"}
      height={"100%"}
      opacity={"0.75"}
      backgroundColor={"green.600"}
      >
        <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        maxWidth={"1280px"}
        position={"absolute"}
        color={"white"}
        fontWeight={"medium"}
        left={"0"}
        right={"0"}
        top={"0"}
        bottom={"0"}
        margin={"0 auto"}
        padding={"2rem"}
        >
            <Text
            fontSize={"5xl"}
            lineHeight={"unset"}
            marginBottom={"1.5rem"}>
              Elevate Your Lifestyle, <br></br> Unravel <strong>Luxury</strong> with Every Listing
            </Text>
        </Box>
      </Box>
    </Box>
    <FeatureProps/>
   <Footer/>
   </ChakraProvider>
   </>
  );
}
