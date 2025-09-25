import { useState, useEffect } from 'react'

import Bar from "../components/Bar";

import Title from "../components/Title";
import Description from "../components/Description";
import DoneButton from "../components/DoneButton";
import Popup from "../components/Popup";
import Input from '../components/Input';



export default function Station_idiom(props) {
  const [status, setStatus] = useState(false);
  const [done, setDone] = useState({input1: false, input2: false, input3: false, input4: false});
  const [Active, setActive] = useState(false);

  function changeStatus(val) {
    setStatus(val);
  }

  const setDoneValue = (key, isCorrect) => {
    setDone(prev => ({ ...prev, [key]: isCorrect }));
  };

  function isActive()
  {
    const value = Object.values(done);
    if(value.length > 0 && value.every(Boolean)){
      let tasks = props.getTask("tasksObj");
      tasks.task10 = true;
      props.setTask("tasksObj", tasks);}
  }

  useEffect(() => {
        setActive(isActive(done));
  }, [done])

  const answersA = ["tongue"];

  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="flex items-center flex-col justify-between w-[90%] h-fit max-h-[70%] min-h-[70%] mt-5 mx-auto">
                  <Title text={"Station" + props.no} />
                
                    <Description text={`A) What word completes all three idioms? Match the idioms with the meanings: `} title={true} small={true}/>
                    <Description text={`B) Match the idioms with the meanings:`} title={false} small={true} />

                    <div className='flex items-center'><Description text={`1. “Bite your …………………………”`}  title={false} small={true} /> <Input answer={"c"} doneNum={done} setDone={setDoneValue} id={"input2"} small={true}/></div>
                    <div className='flex items-center'><Description text={`2. “A slip of the …………………………”`}  title={false} small={true} /> <Input answer={"b"} doneNum={done} setDone={setDoneValue} id={"input3"} small={true}/></div>
                    <div className='flex items-center'><Description text={`3. “On the tip of one's …………………………”`}  title={false} small={true} /><Input answer={"a"} doneNum={done} setDone={setDoneValue} id={"input4"} small={true}/></div>

                    <div className='flex gap-2 items-center'> <h1>A)</h1> <Input answer={answersA} doneNum={done} setDone={setDoneValue} id={"input1"}/></div>
                    
                  

                  <Description text={`A. To know something but be unable to remember it at that moment.`} small={true} title={false} />
                  <Description text={`B. To say something by accident that you didn't mean to say.`} small={true} title={false} />
                  <Description text={`C. To stop yourself from saying something you really think, especially if it's rude or unpleasant`} small={true} title={false} />
                  

                  <div className='flex flex-col gap-2 mt-2'>
                  
                  </div>
      
                  <DoneButton active={done} text={"Zrobione !"} changeStatus={changeStatus} />
                  
                  <div className='h-fit w-[80dvw] pb-10 p-5 rounded-t-lg mx-auto'></div>
      
              </div>
              
      
              <Popup target={props.no + 1} status={status} setStatus={setStatus}  desc={"Go to the main entrance to the school. On the wall next to the door you’ll find an electronic thermometer installed during the pandemic. Look there."}/>
    </div>
  );
}
