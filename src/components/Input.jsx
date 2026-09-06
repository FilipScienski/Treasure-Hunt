import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { useRef } from "react";
import { useState } from "react";

import IconCorrect from "./IconCorrect";
import IconWrong from "./IconWrong";


export default function Input(props)
{

    const [correct, setCorrect] = useState(false);
    const [empty, setEmpty] = useState(true);

    const div = useRef();
    const correctIcon = useRef();
    const wrongIcon = useRef();
    
    function isCorrect(text) {
    if (Array.isArray(props.answer)) {
        for (let a of props.answer) {
            if (text.toLowerCase() === a.toLowerCase()) return true;
        }
        return false;
    } else if (typeof props.answer === "string") {
        return text.toLowerCase() === props.answer.toLowerCase();
    }

}


   function change(e){
    const value = e.target.value;
    const Valid = isCorrect(value);
    console.log(value.length <= 0);
    setEmpty(value.length <= 0);
    
    setCorrect(isCorrect(value));
    props.setDone(props.id, Valid);
    }

    useGSAP(()=>{

        if(empty)
        {
            gsap.to( div.current, {backgroundColor: "#C1121F", duration: 1, ease: "power2"});
        }
        else
        {
            gsap.to( div.current, {backgroundColor: "#ADADAD", duration: 1, ease: "power2"});
        }
    }, {dependencies: [empty]})


    //{correct && <IconCorrect className="object-contain" ref={correctIcon}/>}
    //{correct == false && <IconWrong className="object-contain" ref={wrongIcon} />}
    return(
        <>
            {props.small ? <div className="flex overflow-hidden">
                <input type="text" className="bg-[#D9D9D9] rounded-l-md pl-2 focus:outline-none w-[50%]" onChange={(e)=>{change(e);}}/>
                <div className="w-[32px] h-[32px] bg-[#ADADAD] rounded-r-md items-center" ref={div}>
                </div>
            </div> : <div className="flex overflow-hidden">
                <input type="text" className="bg-[#D9D9D9] rounded-l-md pl-2 focus:outline-none w-28" onChange={(e)=>{change(e);}}/>
                <div className="w-[32px] h-[32px] bg-[#ADADAD] rounded-r-md items-center" ref={div}>
                </div>
            </div>}
        </>
    );
}