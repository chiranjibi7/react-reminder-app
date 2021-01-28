import React from 'react';
import {useToast,Button} from "@chakra-ui/react";

const ToastButton = () => {

        const toast = useToast();
        return (
          <Button
          type="submit"
          bgColor="#bbbb"
          color="white"
          transitionProperty="all"
          transitionDuration="0.5s"
          transitionTimingFunction="ease-in-out"
          border="none"
          borderRadius="8px"
          cursor="pointer"
          _hover={{ bgColor: "#aaaa", w: "40%", color: "black" }}
          w="30%"
          m="10px auto"
            onClick={() =>
              toast({
                position:"bottom-right",
                title: "Reminder Added",
                description: "We've added reminder for you.",
                status: "success",
                duration: 3000,
                isClosable: true,
              })
            }
          >
            ADD
          </Button>
        )
      }

export default ToastButton;
