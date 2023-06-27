"use client"
import Navbar from "./Nav/Navbar"
import Footer from "./Foot/Footer";
import { ChakraProvider } from "@chakra-ui/react";
export default function Home() {
  return (
    <>
    <ChakraProvider>
    <Navbar/>
   <div>Hello Jason</div>
   <Footer/>
   </ChakraProvider>
   </>
  );
}
