"use client"
import Nav from "./nav"
import { ChakraProvider } from "@chakra-ui/react";
export default function Home() {
  return (
    <>
    <ChakraProvider>
    <Nav/>
   <div>Hello Jason</div>
   </ChakraProvider>
   </>
  );
}
