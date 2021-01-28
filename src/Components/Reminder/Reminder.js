import React from "react";
import { Text, Flex} from "@chakra-ui/react";
import AlertDialogBox from "../UI/AlertDialogue";

const Reminder = ({ date, time, place, task, clicked }) => {
  return (
    <Flex
      bgColor="#cccc"
      w="80%"
      direction="column"
      border="1px solid red"
      borderRadius="10px"
      boxShadow="2px 2px 3px red"
    >
      <Text ml={10} mt={10} fontWeight="bold">Date : {date}</Text>
      <Text ml={10} fontWeight="bold">Time : {time}</Text>
      <Text ml={10} fontWeight="bold">Place : {place}</Text>
      <Text ml={10} fontWeight="bold">Task : {task}</Text>
      <AlertDialogBox clicked={clicked} />
    </Flex>
  );
};

export default Reminder;
