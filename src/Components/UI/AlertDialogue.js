import React, { useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Flex,
  useDisclosure,
  AlertDialogCloseButton,
} from "@chakra-ui/react";

const AlertDialogBox = ({ clicked }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  return (
    <>
      <Button
        onClick={onOpen}
        type="submit"
        bgColor="Red"
        color="white"
        border="none"
        borderRadius="8px"
        cursor="pointer"
        _hover={{ bgColor: "rgb(173, 6, 6)"}}
        w="10%"
        m="10px auto"
      >
        REMOVE
      </Button>
      <Flex justify="center" alignItems="center">
        <AlertDialog
          motionPreset="scale"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent>
            <AlertDialogHeader>Remove Your Reminder?</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Are you sure you want to remove this reminder? This will be
              deleted permanently.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                No
              </Button>
              <Button colorScheme="red" ml={3} onClick={clicked}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Flex>
    </>
  );
};

export default AlertDialogBox;
