import { useState, useEffect } from 'react'




import Bar from "../components/Bar";

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
      tasks.task5 = true;
      props.setTask("tasksObj", tasks);
  }
}

  useEffect(() => {
        setActive(isActive(done));
  }, [done])

  const answer = ["argue", "to have an argument", "to have a fight", "to have a row", "to fall out", "to bicker", "to disagree"];

  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="flex items-center flex-col justify-between w-[90%] h-fit max-h-[70%] min-h-[70%] mt-5 mx-auto">
                  <Title text={"Station" + props.no} />
      
                  <Description text={`Write down 3 synonyms to the verb: quarrel`} title={true}/>
                  <div className='flex flex-col gap-2 mt-2'>
                  <Input answer={answer} doneNum={done} setDone={setDoneValue} id={"input1"}/>
                  <Input answer={answer} doneNum={done} setDone={setDoneValue} id={"input2"}/>
                  <Input answer={answer} doneNum={done} setDone={setDoneValue} id={"input3"}/>
                  </div>
      
                  <DoneButton active={done} text={"Zrobione !"} changeStatus={changeStatus} />
                  
                  <div className='h-fit w-[80dvw] pb-10 p-5 rounded-t-lg mx-auto'></div>
      
              </div>
              
      
              <Popup target={props.no + 1} setStatus={setStatus} status={status} desc={"It’s the first floor again. Check the glass cabinets hanging on the walls between entrances to the classrooms. The next clue is there."}/>
    </div>
  );
}
