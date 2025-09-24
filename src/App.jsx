
import './output.css'

import Bar from "./components/Bar";
import HeroText from './components/HeroText';
import { useOutletContext } from "react-router-dom";

export default function App() {
  const { goTo } = useOutletContext();

  return (
    <div className="h-[100dvh] overflow-y-hidden">
          <Bar text={"Proto"} />
          <div className='w-full h-full flex justify-around items-center flex-col'>
            <HeroText text={"Test"}/>
            <p className="uppercase rounded-xl font-['Poppins'] px-4 py-2 font-bold text-white text-2xl flex items-center bg-[#5EA4FF]" onClick={() => {goTo("/1");}}>Rozpocznij !</p>
          </div>
        </div>
  );
}
