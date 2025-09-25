import { useState, useEffect } from 'react'

import Bar from "../components/Bar";

import Title from "../components/Title";
import Description from "../components/Description";
import DoneButton from "../components/DoneButton";
import Popup from "../components/Popup";
import Input from '../components/Input';



export default function Station_translate(props) {
  const [status, setStatus] = useState(false);
  const [done, setDone] = useState({input1: false, input2: false});
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
      tasks.task9 = true;
      props.setTask("tasksObj", tasks);}
  }

  useEffect(() => {
        setActive(isActive(done));
  }, [done])

  const answersA = ["The Bible", "Bible"];
  const answersB = ["The King James Version (KJV)", "King James Version (KJV)", "The King James Version", "KJV", "King James Version", "the King James Bible (KJB)", "King James Bible (KJB)", "King James Bible", "KJB", "the Authorized Version (AV)", "the Authorized Version", "Authorized Version (AV)", "AV"];

  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="flex items-center flex-col justify-between w-[90%] h-fit max-h-[70%] min-h-[70%] mt-5 mx-auto">
                  <Title text={"Station" + props.no} />
                
                    <Description text={`A) What is the most translated book of all times? `} title={true} small={true}/>
                    <Description text={`B) What is the name of its English translation which was commissioned in 1604 and published in 1611?`} title={false} small={true} />

                    <div className='flex gap-2 items-center'> <h1>A)</h1> <Input answer={answersA} doneNum={done} setDone={setDoneValue} id={"input1"}/></div>
                    <div className='flex gap-2 items-center'> <h1>B)</h1> <Input answer={answersB} doneNum={done} setDone={setDoneValue} id={"input2"}/></div>
                  
                  
                  <div className='flex flex-col gap-2 mt-2'>
                  
                  </div>
      
                  <DoneButton active={done} text={"Zrobione !"} changeStatus={changeStatus} />
                  
                  <div className='h-fit w-[80dvw] pb-10 p-5 rounded-t-lg mx-auto'></div>
      
              </div>
              
      
              <Popup target={props.no + 1} status={status} setStatus={setStatus} desc={"Go to the first floor. Check the windowsill next to Aula."}/>
    </div>
  );
}
