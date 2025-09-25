import { useState, useEffect } from 'react'




import Bar from "../components/Bar";

import Title from "../components/Title";
import Description from "../components/Description";
import DoneButton from "../components/DoneButton";
import Popup from "../components/Popup";
import Input from '../components/Input';
import Palindroms from '../components/PalindromsInput';



export default function Station_Palindrom(props) {
  const [status, setStatus] = useState(false);
  const [done, setDone] = useState({});
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
      tasks.task1 = true;
      props.setTask("tasksObj", tasks);
    };
  }

  useEffect(() => {
        setActive(isActive(done));
  }, [done])

  useEffect(() => {
    let now = new Date();
    //console.log(now);
    let info = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    sessionStorage.setItem("startTimeCode", new Date());
    sessionStorage.setItem("startTime", info);
  }, [])

  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="flex items-center flex-col justify-between w-[90%] h-fit max-h-[70%] min-h-[70%] mt-5 mx-auto">
                  <Title text={"Station" + props.no} />
      
                  <Description text={"Insert palindrom "} />

                  <Palindroms answer={["aha", "bub", "dad", "dud", "eve", "eye", "gig", "mom", "pop", "pup", "tot", "tut", "wow"]} doneNum={done} setDone={setDoneValue} id={"input1"}/>
      
                  <DoneButton active={done} text={"Zrobione !"} changeStatus={changeStatus} no={1} />
                  
                  <div className='h-fit w-[80dvw] pb-10 p-5 rounded-t-lg mx-auto'></div>
      
              </div>
              
      
              <Popup target={props.no + 1} status={status} setStatus={setStatus} desc={"You'll find the next clue on the second floor. Look behind the radiators on the corridor"}/>
    </div>
  );
}
