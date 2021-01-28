import React from 'react';
import Reminder from '../Reminder/Reminder';
import {VStack,Box} from "@chakra-ui/react";

const ReminderList = ({data,time,date,place,task,clicked,reminder}) => {
    return (
      <Box mt={10}>
        <VStack>
         {reminder && data.map(({time,date,place,task},idx)=>
        <Reminder 
      date={date}
      time={time}
      place={place}
      task={task}
      key={Math.random()}
      clicked={()=>clicked(idx)}
      />)}
        </VStack>
        </Box>
    )
}

export default ReminderList;
