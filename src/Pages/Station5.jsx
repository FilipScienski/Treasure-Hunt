import { useState, useEffect } from 'react'




import Bar from "../components/Bar";

import Title from "../components/Title";
import Description from "../components/Description";
import DoneButton from "../components/DoneButton";
import Popup from "../components/Popup";
import Input from '../components/Input';
import Words from '../components/Words';



export default function Station5(props) {
  const [status, setStatus] = useState(false);
  const [Active, setActive] = useState(false);

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

                  <Words words={["Apple", "Tomato", "Oscar"]} answer={"Oscar"} changeActive={changeActive} />
      
                  {Active && <DoneButton text={"Zrobione !"} changeStatus={changeStatus} />}
                  
                  <div className='h-fit w-[80dvw] pb-10 p-5 rounded-t-lg mx-auto'></div>
      
              </div>
              
      
              <Popup target={props.no + 1} status={status} desc={"Now go to the finish."}/>
    </div>
  );
}
