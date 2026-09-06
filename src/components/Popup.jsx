import { gsap } from "gsap";
//import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import { useRef } from "react";

import NextButton from "./NextButton";
import Summary from "./SummaryButton";

export default function Popup(props)
{
    const popup = useRef();
    const anim = useRef();

  useEffect(() => {
    anim.current = gsap.fromTo( popup.current, { y: 200, autoAlpha: 0 }, { y: -30, autoAlpha: 1 , duration: 0.5, ease: "power2.inOut", paused: true } );
  }, []);

  useEffect(() => {
    if (props.status) {
      anim.current.play();
    } else {
      anim.current.reverse();
    }
  }, [props.status]);

    return(
        <>
            <div className="bg-black/70 h-100 w-[80dvw] p-4 mb-10 rounded-t-lg mx-auto" ref={popup}>
                <div className="w-[90%]">
                    <h3 className="uppercase font-['Poppins'] font-bold text-2xl text-white">Przejdź dalej</h3>
                    <h4 className="uppercase font-['Poppins'] font-bold text-md w-fit min-h-25 max-h-25  overflow-y-auto  overflow-clip text-white/70">{props.desc}</h4>
                </div>

                <div className="flex w-full  items-center justify-between">
                    <h5 className="font-['Poppins'] font-bold text-white/70 mt-4">{props.target -1 } / {localStorage.getItem("noPages")}</h5>
                    {props.summary ? <Summary target={props.target}/> : <NextButton target={props.target}/>}
                </div>

                </div>
        </>
    );
}