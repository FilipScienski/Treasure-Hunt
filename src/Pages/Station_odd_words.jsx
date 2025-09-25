import { useState, useEffect } from 'react'




import Bar from "../components/Bar";

import Title from "../components/Title";
import Description from "../components/Description";
import DoneButton from "../components/DoneButton";
import Popup from "../components/Popup";
import Input from '../components/Input';
import Words from '../components/Words';



export default function Station_odd_words(props) {
  const [status, setStatus] = useState(false);
  const [Active, setActive] = useState(false);
  const [done, setDone] = useState({});

  const setDoneValue = (key, isCorrect) => {
      setDone(prev => ({ ...prev, [key]: isCorrect }));
    };
  
    function isActive()
    {
      const value = Object.values(done);
      return value.length > 0 && value.every(Boolean);
    }
  
    useEffect(()=>{
      console.log(Active);
      let tasks = props.getTask("tasksObj");
      tasks.task2 = Active;
      props.setTask("tasksObj", tasks);
    }, [Active])

    useEffect(() => {
          setActive(isActive(done));
    }, [done])

  function changeStatus(val) {
    setStatus(val);
  }

  function changeActive(val)
  {
    setActive(val);
  }

  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="flex items-center flex-col justify-between w-[90%] h-fit max-h-[70%] min-h-[70%] mt-5 mx-auto">
                  <Title text={"Station" + props.no} />
      
                  <Description text={"Find wrong word "} />
                  <Words words={["English", "French", "Deutsch", "Vietnamese", "Finnish"]} answer={"Deutsch"} changeActive={changeActive} />
                  <DoneButton text={"Zrobione !"} changeStatus={changeStatus} />
                  
                  <div className='h-fit w-[80dvw] pb-10 p-5 rounded-t-lg mx-auto'></div>
      
              </div>
              
      
              <Popup target={props.no + 1} status={status} setStatus={setStatus} desc={"Go to the ground floor.Behind the big, swinging door there are 2 plants. Look behind them for the next clue."}/>
    </div>
  );
}
