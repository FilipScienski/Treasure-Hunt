import { useState, useEffect } from 'react'

import video from '../assets/song.mp4'


import Bar from "../components/Bar";

import Title from "../components/Title";
import Description from "../components/Description";
import DoneButton from "../components/DoneButton";
import Popup from "../components/Popup";
import Input from '../components/Input';



export default function Station4(props) {
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
      tasks.task4 = true;
      props.setTask("tasksObj", tasks);
    };
  }

  useEffect(() => {
        setActive(isActive(done));
  }, [done])

  

  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="flex items-center flex-col justify-between w-[90%] h-fit max-h-[70%] min-h-[70%] mt-5 mx-auto">
                  <Title text={"Station" + props.no} />
      
                  <Description text={"What’s the title of the song by an American folk duo Simon and Garfunkel?  You can hear the melody here: "} title={true} />

                  <video controls className='my-2 w-[90%]'>
                    <source src={video} />
                  </video>

                  <Input answer={["The Sound Of Silence", "Sound Of Silence"]} doneNum={done} setDone={setDoneValue} id={"input1"}/>
      
                  <DoneButton active={done} text={"Zrobione !"} changeStatus={changeStatus} />
                  
                  <div className='h-fit w-[80dvw] pb-10 p-5 rounded-t-lg mx-auto'></div>
      
              </div>
              
      
              <Popup target={props.no + 1} setStatus={setStatus} status={status} desc={`Directions to the next clue:
Go back to the second floor. Check the mathematical corner with 2 comfortable sofas. The next clue is there.`}/>
    </div>
  );
}
