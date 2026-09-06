import { useState, useEffect } from 'react'

import Bar from "../components/Bar";

import Title from "../components/Title";
import Description from "../components/Description";
import DoneButton from "../components/DoneButton";
import Popup from "../components/Popup";
import Input from '../components/Input';
import Summary from '../components/SummaryButton';



export default function Station_twister(props) {
  const [status, setStatus] = useState(false);
  const [done, setDone] = useState({input1: false});
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
      tasks.task12 = true;
      props.setTask("tasksObj", tasks);}
  }

  useEffect(() => {
        setActive(isActive(done));
  }, [done])


  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="flex items-center flex-col justify-between w-[90%] h-fit max-h-[70%] min-h-[70%] mt-5 mx-auto">
                  <Title text={"Station" + props.no} />
                
                    <Description text={`Find the English tongue twister on the main stairs. Learn to say it correctly and fluently. Go to … and ask, if you can present the tongue twister. If you say it correctly you’ll get a password to pass this clue and the next direction. Good luck!`} title={true} small={true}/>
                    
                    <Input answer={"Well done"} doneNum={done} setDone={setDoneValue} id={"input1"} small={false} />

                  <div className='flex flex-col gap-2 mt-2'>
                  
                  </div>
      
                  <DoneButton active={done} text={"Zrobione !"} changeStatus={changeStatus} />
                  
                  <div className='h-fit w-[80dvw] pb-10 p-5 rounded-t-lg mx-auto'></div>
      
              </div>
              
      
              <Popup target={'summary'} status={status}  desc={"THE END"} summary={true}/>
    </div>
  );
}
