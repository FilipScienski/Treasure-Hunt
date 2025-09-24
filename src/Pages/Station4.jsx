import { useState, useEffect } from 'react'




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
    return value.length > 0 && value.every(Boolean);
  }

  useEffect(() => {
        setActive(isActive(done));
        console.log(done);
  }, [done])

  

  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="flex items-center flex-col justify-between w-[90%] h-fit max-h-[70%] min-h-[70%] mt-5 mx-auto">
                  <Title text={"Station" + props.no} />
      
                  <Description text={"Complete "} />

                  <Input answer="test" doneNum={done} setDone={setDoneValue} id={"input1"}/>
      
                  {Active && <DoneButton active={done} text={"Zrobione !"} changeStatus={changeStatus} />}
                  
                  <div className='h-fit w-[80dvw] pb-10 p-5 rounded-t-lg mx-auto'></div>
      
              </div>
              
      
              <Popup target={props.no + 1} status={status} desc={"Now go to the finish."}/>
    </div>
  );
}
