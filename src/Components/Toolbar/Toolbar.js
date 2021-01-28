import React from "react";
import { Center, Flex, Link, Text } from "@chakra-ui/react";
import {Link as ReactRouterLink} from "react-router-dom";
import Logo from '../Logo/Logo';

const Toolbar = ({ count }) => {
  return (
    <Flex maxW="100%" bgColor="#444" color="white" justify="space-evenly">
      <Center fontWeight="bold" fontSize="20px"><Logo/></Center>
      <Flex>
        <Center>
          <Link
            border="none"
            borderRadius="10px"
            _hover={{ bgColor: "rgb(3, 90, 90)", border: "1px solid white" }}
            p={3}
            bgColor="Teal"
            color="white"
            fontWeight="bold"
            textDecor="none"
            as={ReactRouterLink}
            to="/"
          >
            ADD REMINDER
          </Link>
        </Center>

        <Center>
          <Link
            border="none"
            borderRadius="10px"
            _hover={{ bgColor: "rgb(3, 90, 90)", border: "1px solid white" }}
            p={3}
            ml={20}
            bgColor="Teal"
            color="white"
            fontWeight="bold"
            textDecor="none"
            as={ReactRouterLink}
            to="/reminder-list"
          >
            REMINDER LIST
          </Link>
        </Center>
      </Flex>

      <Center fontWeight="bold">
        TOTAL REMINDER :{" "}
        <Text
          bgColor="Teal"
          p={3}
          ml={3}
          mt={2}
          mb={2}
          borderRadius={5}
          bgColor= "rgb(3, 90, 90)"
          border= "1px solid white"
        >
          {" "}
          {count}
        </Text>
      </Center>
    </Flex>
  );
};

export default Toolbar;
