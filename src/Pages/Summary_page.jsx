import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect} from "react";
import CountUp from "../components/CountUp";

export default function Summary_page(props) {
  const wynikContainer = useRef();

  const res = props.getTask("tasksObj");
  const val = Object.values(res);
  let doneCount = 0;

  val.map((task) => (task == true ? doneCount++ : null));
  /* 
  <tbody>
          {val.map((task) =>
            task == true ? (
              <tr key={i} className="">
                <td className="border-1 text-center">Zadanie {i++}</td>
                <td className="border-1 text-center">✅</td>
              </tr>
            ) : (
              <tr key={i}>
                <td className="border-1 text-center">Zadanie {i++}</td>
                <td className="border-1 text-center">x</td>
              </tr>
            )
          )}
        </tbody>*/


    useGSAP(()=>{
        gsap.fromTo(wynikContainer.current, {autoAlpha: 0}, {autoAlpha: 1, duration: .5, delay:.5 , ease: "power3.in"});
    },{dependencies: []});

    useEffect(() => {
        let now = new Date();
        let info = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        sessionStorage.setItem("endTimeCode", now);
        sessionStorage.setItem("endTime", info);
      },)
      const end = new Date(sessionStorage.getItem("endTimeCode")).getTime();
      const start = new Date(sessionStorage.getItem("startTimeCode")).getTime();

  return (
    <div className="w-ful h-full bg-[#002626] flex flex-col items-center overflow-y-auto">

      {Math.floor( (end - start)  / 1000 /60 ) <= 0 && <h1 className="text-red-500">Odśwież stronę</h1> }

      <div
        className="flex items-center font-['Poppins'] text-4xl font-bold text-white mt-20 gap-2"
        ref={wynikContainer}
      >
        <h1>{"Wynik: "}</h1>
        <CountUp
          from={0}
          to={doneCount}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text text-white w-fit h-full"
        />
      </div>

      <table className="w-[50%] h-[60%] my-4 shadow-md border-collapse">
        <thead>
          <tr className="bg-gray-900 text-white text-sm uppercase">
            <th className="py-2 text-center">Zadanie</th>
            <th className="py-2 text-center">Status</th>
          </tr>
        </thead>
        
        <tbody>
          {val.map((task, i) => (
            <tr
              key={i}
              className={
                task
                  ? "bg-green-100 hover:bg-green-200"
                  : "bg-red-100 hover:bg-red-200"
              }
            >
              <td className="border border-gray-300 text-center py-2 px-8 font-medium">{`Zadanie ${
                i +1 
              }`}</td>
              <td className="border border-gray-300 text-center py-2  px-8 text-xl">
                {task ? "✅" : "❌"}
              </td>
            </tr>
          ))}

          <tr className="bg-white text-center">
            <td className="border border-gray-300 text-center py-2 px-8 font-medium">Czas rozpoczęcia:</td>
            <td>{sessionStorage.getItem("startTime")}</td>
          </tr>
          <tr className="bg-white text-center">
            <td className="border border-gray-300 text-center py-2 px-8 font-medium">Czas zakończenia:</td>
            <td>{sessionStorage.getItem("endTime")}</td>
          </tr>
          <tr className="bg-white text-center border-t border-gray-300">
            <td className="border border-gray-300 text-center py-2 px-8 font-medium">Czas:(min)</td>
            <td>{Math.floor( (end - start)  / 1000 /60 )}</td>
          </tr>

          
        </tbody>
      </table>
    </div>
  );
}
