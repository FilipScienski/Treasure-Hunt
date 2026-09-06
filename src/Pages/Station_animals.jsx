import { useState, useEffect } from 'react'

import Title from "../components/Title";
import Description from "../components/Description";
import DoneButton from "../components/DoneButton";
import Popup from "../components/Popup";
import Input from '../components/Input';



export default function Station3(props) {
  const [status, setStatus] = useState(false);
  const [done, setDone] = useState({input1: false, input2: false, input3: false});
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
      tasks.task3 = true;
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
      
                  <Description text={`Find the name of an animal hidden in each sentence as consecutive letters. There are spaces between the letters. You need to find and write down at least 3 names of animals.`} title={true} small={true}/>
                  <p>1. “Mary came late.</p>
                  <p>2. “He took it tenderly."</p>
                  <p>3. “An Arab bit his tongue.” </p>
                  <p>4. “Is that house a little crooked?”</p>
                  <p>5. “Is that maze brand new?” </p>
                  <div className='flex flex-col gap-2 mt-2'>
                  <Input answer={["camel", "kitten", "rabbit", "seal", "zebra"]} doneNum={done} setDone={setDoneValue} id={"input1"}/>
                  <Input answer={["camel", "kitten", "rabbit", "seal", "zebra"]} doneNum={done} setDone={setDoneValue} id={"input2"}/>
                  <Input answer={["camel", "kitten", "rabbit", "seal", "zebra"]} doneNum={done} setDone={setDoneValue} id={"input3"}/>
                  </div>
      
                  <DoneButton active={done} text={"Zrobione !"} changeStatus={changeStatus} />
                  
                  <div className='h-fit w-[80dvw] pb-10 p-5 rounded-t-lg mx-auto'></div>
      
              </div>
              
      
              <Popup target={props.no + 1} status={status} setStatus={setStatus} desc={"Go to the first floor. Find the board with the photos of the school's top students. The next clue is there."}/>
    </div>
  );
}
