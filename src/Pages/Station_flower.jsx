import { useState, useEffect } from 'react'




import Bar from "../components/Bar";

import Title from "../components/Title";
import Description from "../components/Description";
import DoneButton from "../components/DoneButton";
import Popup from "../components/Popup";
import Input from '../components/Input';

export default function Station_flower(props) {
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
      tasks.task6 = true;
      props.setTask("tasksObj", tasks);}
  }

  useEffect(() => {
        setActive(isActive(done));
  }, [done])

  //<Bar text={"test"} />

  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="flex items-center flex-col justify-between w-[90%] h-fit max-h-[70%] min-h-[70%] mt-5 mx-auto">
                  <Title text={"Station" + props.no} />
      
                  <Description title={true} />
                  <Description text={"In Shakespeare’s play, Romeo and Juliet, the girl compares Romeo’s name to a flower, which “by any other name would smell as sweet”. What flower is she talking about? Draw a picture of the flower or find one on the internet. Then go to the cloakroom in the basement. Find Mrs. Ula. Thank her for her hard work that she does for the school and show her the picture. If it’s the right flower you’ll get the directions to another task from Mrs Ula. Good luck!"} title={false} />
                  <Input answer={["a rose", "rose"]} doneNum={done} setDone={setDoneValue} id={"input1"}/>

                  <DoneButton active={done} text={"Zrobione !"} changeStatus={changeStatus} />
                  
                  <div className='h-fit w-[80dvw] pb-10 p-5 rounded-t-lg mx-auto'></div>
      
              </div>
              
      
              <Popup target={props.no + 1} status={status} setStatus={setStatus} desc={"Scan qr code"}/>
    </div>
  );
}
