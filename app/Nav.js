"use client";
import React from "react";
import Link from "next/link";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { HiHomeModern } from "react-icons/hi2";
import { navList } from "./navList";

export default function Nav() {
  return (
    <Box
      color="green"
      paddingY="2rem"
      backgroundColor="white"
      display={{ base: "none", md: "block" }}
    >
      <Box maxWidth="1280px" margin="0 auto">
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Box>
              <HiHomeModern size="30" />
              <Text fontSize="2xl" fontWeight="black">
                Jason's Real Estate
              </Text>
            </Box>
          </Link>
          {navList.map((item) => (
            <NavigationLink key={item.title} {...item} />
          ))}
          <Button
            padding="1.5rem"
            colorScheme="green"
            fontSize="0.8rem"
            fontWeight="medium"
          >
            CREATE LISTING
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

const NavigationLink = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      <Flex alignItems="center" gap="0.5rem">
        {icon}
        {title}
      </Flex>
    </Link>
  );
};
