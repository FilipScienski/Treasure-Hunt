import { useState, useEffect } from 'react'




import Bar from "../components/Bar";

import Title from "../components/Title";
import Description from "../components/Description";
import DoneButton from "../components/DoneButton";
import Popup from "../components/Popup";
import Input from '../components/Input';



export default function Station_poem(props) {
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
      tasks.task8 = true;
      props.setTask("tasksObj", tasks);}
  }

  useEffect(() => {
        setActive(isActive(done));
  }, [done])

  const answers = ["care at","beats", "turned-up", "turned up", "reddish", "peach", " can’t elope", "cant elope", "Let us", " We’d", "we would"]

  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="flex items-center flex-col justify-between w-[90%] h-fit max-h-[70%] min-h-[70%] mt-5 mx-auto">
                  <Title text={"Station" + props.no} />
                
                    <Description text={`In this “vegetable love poem,” some words and phrases have been
                    replaced by names of vegetables and fruits. Can you find them and
                    put them right? There are 9 altogether. The first one is done for you:
                    “carrot = care at”. You need to write down at least 3 more.`} title={true} small={true}/>

                    <div className='min-h-24 max-h-24 overflow-y-auto'>
                    <Description text={`Poem:                               `} title={false} small={true}/>
                    <Description text={`Do you carrot all for me?`} title={false} small={true} />
                    <Description text={`My heart beets for you, `} title={false} small={true} />
                    <Description text={`With your turnip nose`} title={false} small={true} />
                    <Description text={`And your radish face,`} title={false} small={true} />
                    <Description text={` You are a peach.           `} title={false} small={true} />
                    <Description text={`If we cantaloupe,             `} title={false} small={true} />
                    <Description text={`Lettuce marry:          `} title={false} small={true} />
                    <Description text={`Weed make a swell pear.`} title={false} small={true} />
                    </div>
                  
                  
                  <div className='flex flex-col gap-2 mt-2'>
                  <Input answer={answers} doneNum={done} setDone={setDoneValue} id={"input1"}/>
                  <Input answer={answers} doneNum={done} setDone={setDoneValue} id={"input2"}/>
                  <Input answer={answers} doneNum={done} setDone={setDoneValue} id={"input3"}/>
                  </div>
      
                  <DoneButton active={done} text={"Zrobione !"} changeStatus={changeStatus} />
                  
                  <div className='h-fit w-[80dvw] pb-10 p-5 rounded-t-lg mx-auto'></div>
      
              </div>
              
      
              <Popup target={props.no + 1} status={status} setStatus={setStatus} desc={"Go to the ground floor. Find the office of the school pedagogue. You’ll find the next clue on the noticeboard next to her office."}/>
    </div>
  );
}
