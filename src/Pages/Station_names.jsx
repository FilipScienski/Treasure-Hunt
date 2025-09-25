import { useState, useEffect } from 'react'




import Bar from "../components/Bar";

import Title from "../components/Title";
import Description from "../components/Description";
import DoneButton from "../components/DoneButton";
import Popup from "../components/Popup";
import Input from '../components/Input';



export default function Station_names(props) {
  const [status, setStatus] = useState(false);
  const [done, setDone] = useState({input1: false, input2: false, input3: false, input4: false, input5: false});
  const [Active, setActive] = useState(false);

  function changeStatus(val) {
    setStatus(val);
  }

  const setDoneValue = (key, isCorrect) => {
    setDone(prev => ({ ...prev, [key]: isCorrect }));
  };

  function isActive()
  {
    let i = 0;
    const value = Object.values(done);
    for(let a of value)
    {
      if(a)
      {
        i++;
      }
    }
    if(value.length > 0 && i >= 3){
      let tasks = props.getTask("tasksObj");
      tasks.task7 = true;
      props.setTask("tasksObj", tasks);}
  }

  useEffect(() => {
        setActive(isActive(done));
  }, [done])

  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="flex items-center flex-col justify-between w-[90%] h-fit max-h-[70%] min-h-[70%] mt-5 mx-auto">
                  <Title text={"Station" + props.no} />
                
                    <Description text={""} title={true} />
                  <Description text={`The English have a unique linguistic pattern: the meat on the table often has a French name, while the animal in the field has an Old English name. This is a direct consequence of a historical fact. In 1066, William the Conqueror and his Norman-French nobles defeated the English at the Battle of Hastings, which led to Norman control of England. As a result, a new order emerged in which the Norman aristocracy became the wealthy ruling class, while the Anglo-Saxon commoners remained the working peasants. The peasants continued to call their animals by their English names, but the Normans used their own language for the meat they consumed.`} title={false} small={true}/>
                  <Description text={"Question: What is the meat that comes from these animals called? Write at least 3 examples."} title={false} small={true}/>
                  <div className='flex gap-2'>
                  <div className='flex flex-col gap-2 mt-2'>
                  <div className='flex'> <h1 className='min-w-15'>Cow:  </h1> <Input answer={"Beef"} doneNum={done} setDone={setDoneValue} small={true} id={"input1"}/></div>
                  <div className='flex'> <h1 className='min-w-15'>Pig: </h1> <Input answer={"Pork"} doneNum={done} setDone={setDoneValue} small={true} id={"input2"}/></div>
                  </div>
                  <div className='flex flex-col gap-2 mt-2'>
                  <div className='flex'> <h1 className='min-w-15'>Sheep: </h1> <Input answer={"Mutton"} doneNum={done} setDone={setDoneValue} small={true} id={"input3"}/></div>
                  <div className='flex'> <h1 className='min-w-15'>Calf: </h1> <Input answer={"Veal"} doneNum={done} setDone={setDoneValue} small={true} id={"input4"}/></div>
                  <div className='flex'> <h1 className='min-w-15'>Deer: </h1> <Input answer={"Venison"} doneNum={done} setDone={setDoneValue} small={true} id={"input5"}/></div>
                  </div>
                  </div>
      
                  <DoneButton active={done} text={"Zrobione !"} changeStatus={changeStatus} />
                  
                  <div className='h-fit w-[80dvw] pb-10 p-5 rounded-t-lg mx-auto'></div>
      
              </div>
              
      
              <Popup target={props.no + 1} status={status} setStatus={setStatus}  desc={"Stay in the basement. Find locker number 174. The next clue is close by."}/>
    </div>
  );
}
