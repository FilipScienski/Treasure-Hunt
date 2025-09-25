import { useState, useEffect } from 'react'

import Bar from "../components/Bar";

import Title from "../components/Title";
import Description from "../components/Description";
import DoneButton from "../components/DoneButton";
import Popup from "../components/Popup";
import Input from '../components/Input';



export default function Station_quotes(props) {
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
    const value = Object.values(done);
    if(value.length > 0 && value.every(Boolean)){
      let tasks = props.getTask("tasksObj");
      tasks.task11 = true;
      props.setTask("tasksObj", tasks);}
  }

  useEffect(() => {
        setActive(isActive(done));
  }, [done])

  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="flex items-center flex-col justify-between w-[90%] h-fit max-h-[70%] min-h-[70%] mt-5 mx-auto">
                  <Title text={"Station" + props.no} />
                
                    <Description text={`Match the quotes with the films:`} title={true} small={true} reduceMargin={true}/>

                    <div className='flex items-center'><Description text={`1.“Elementary, my dear Watson.”`}  title={false} small={true} reduceMargin={true} className="scale-90"/> <Input answer={'e'} doneNum={done} setDone={setDoneValue} id={"input1"} small={true} /></div>
                    <div className='flex items-center'><Description text={`2. “You can mess with a lot of things. But you can’t mess with kids on Christmas.”`} reduceMargin={true} className="scale-90"  title={false} small={true} /> <Input answer={'c'} doneNum={done} setDone={setDoneValue} id={"input2"} small={true} /></div>
                    <div className='flex items-center'><Description text={`3. “Keep your friends close, but your enemies closer.”`}  title={false} small={true} reduceMargin={true} className="scale-90" /> <Input answer={'a'} doneNum={done} setDone={setDoneValue} id={"input3"} small={true} /></div>
                    <div className='flex items-center'><Description text={`4. “Carpe diem. Seize the day, boys. Make your lives extraordinary.”`}  title={false} small={true} reduceMargin={true} className="scale-90" /> <Input answer={'d'} doneNum={done} setDone={setDoneValue} id={"input4"} small={true} /></div>
                    <div className='flex items-center'><Description text={`5. "Last night you were unhinged. You were like some desperate, howling demon. You frightened me. Do it again."`} className="scale-90" reduceMargin={true} title={false} small={true} /> <Input answer={'b'} doneNum={done} setDone={setDoneValue} id={"input5"} small={true} /></div>

                    <Description text={`A. — The Godfather Part II; B. – The Addams Family; C. — Home Alone 2: Lost in New York;D. — Dead Poets Society; E.  — The Adventures of Sherlock Holmes`} title={false} small={true}/>

                  <div className='flex flex-col gap-2 mt-2'>
                  
                  </div>
      
                  <DoneButton active={done} text={"Zrobione !"} changeStatus={changeStatus} />
                  
                  <div className='h-fit w-[80dvw] pb-10 p-5 rounded-t-lg mx-auto'></div>
      
              </div>
              
      
              <Popup target={props.no + 1} status={status} setStatus={setStatus} desc={"Go outside onto the inner schoolyard through entrance C. Look around and find a window with brown bars. You’ll find your last clue there."}/>
    </div>
  );
}
