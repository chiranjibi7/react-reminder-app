import React, {useState} from 'react';
import AddReminder from './Components/AddReminder/AddReminder';
import ReminderList from './Components/ReminderList/ReminderList';
import Toolbar from "./Components/Toolbar/Toolbar";
import {Route,Switch} from 'react-router-dom';


const App = ()=>{

  const[data,setData]= useState([]);
  const[count,setCount]=useState(0);
  const[reminder,setReminder]=useState(false);

  const[date,setDate]=useState('');
  const[time,setTime]=useState('');
  const[place,setPlace]=useState('');
  const[task,setTask]=useState('');

   const formSubmitHandler=e=>{
    e.preventDefault();
    setData( prevData=>[...prevData,{time:time,date:date,task:task,place:place}]);
    setCount(prevCount=> prevCount+1);
    setReminder(true);
}

   const dateHandler=e=>{
    setDate(e.target.value);
  }

   const timeHandler=e=>{
    setTime(e.target.value);
  }

   const placeHandler=e=>{
    setPlace(e.target.value);
  }

   const taskHandler=e=>{
    setTask(e.target.value);
  }

   const taskRemovedHandler=(idx)=>{
    const updatedData=[...data];
    updatedData.splice(idx,1);
    setData(updatedData);
    setCount(prevCount=> prevCount-1);
  }

    return(
      <div>  
      <Toolbar count={count}/>

      <Switch>
        <Route path="/" exact render={()=>(
             <AddReminder 
             submit={formSubmitHandler} 
             dateHandler={(e)=>dateHandler(e)}
             timeHandler={(e)=>timeHandler(e)}
             placeHandler={(e)=>placeHandler(e)}
             taskHandler={(e)=>taskHandler(e)}/>
        )}/>

        <Route path="/reminder-list" render={()=>(
          <ReminderList
          data={data}
          time={time}
          place={place}
          task={task}
          date={date}
          reminder={reminder}
          clicked={(idx)=>taskRemovedHandler(idx)}/>
        )}/>
      </Switch> 
      </div>
    );


}

export default App;
