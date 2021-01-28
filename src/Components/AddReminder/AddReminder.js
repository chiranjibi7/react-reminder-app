import React from "react";
import {
  FormControl,
  FormLabel,
  Flex,
  Box,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import ToastButton from '../UI/ToastButton';

const AddReminder = ({
  submit,
  dateHandler,
  timeHandler,
  placeHandler,
  taskHandler,
}) => {
  return (
    <Box
      bgColor="Teal"
      w="50%"
      m="40px auto"
      color="white"
      borderRadius="15px"
      boxShadow="5px 5px 3px rgb(3, 90, 90)"
    >
      <form onSubmit={submit}>
        <Flex direction="column">
          <FormControl id="date">
            <FormLabel ml="20px" mt="10px" fontWeight="bold">
              Date
            </FormLabel>
            <Input
              type="date"
              w="90%"
              mb={5}
              ml={5}
              outline="none"
              border="none"
              borderRadius="8px"
              bgColor="white"
              color="black"
              onChange={dateHandler}
            />
          </FormControl>

          <FormControl id="time">
            <FormLabel ml="20px" fontWeight="bold">
              Time
            </FormLabel>
            <Input
              type="time"
              w="90%"
              mb={5}
              ml={15}
              outline="none"
              border="none"
              borderRadius="8px"
              bgColor="white"
              color="black"
              onChange={timeHandler}
            />
          </FormControl>

          <FormControl id="place">
            <FormLabel ml="20px" fontWeight="bold">
              Place
            </FormLabel>
            <Input
              type="text"
              w="90%"
              mb={5}
              ml={15}
              outline="none"
              border="none"
              borderRadius="8px"
              bgColor="white"
              color="black"
              onChange={placeHandler}
            />
          </FormControl>

          <FormControl id="task">
            <FormLabel ml="20px" fontWeight="bold">
              Task
            </FormLabel>
            <Textarea
              w="90%"
              ml={5}
              outline="none"
              border="none"
              borderRadius="8px"
              bgColor="white"
              color="black"
              onChange={taskHandler}
            />
          </FormControl>

          <ToastButton/>
        </Flex>
      </form>
    </Box>
  );
};

export default AddReminder;
