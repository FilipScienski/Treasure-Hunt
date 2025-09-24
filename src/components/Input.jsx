import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { useRef } from "react";
import { useState } from "react";

import IconCorrect from "./IconCorrect";
import IconWrong from "./IconWrong";


export default function Input(props)
{

    const [correct, setCorrect] = useState(false);

    const div = useRef();
    const correctIcon = useRef();
    const wrongIcon = useRef();
    
    function isCorrect(text)
    {   
        return text == props.answer;       
    }

   function change(e){
    const value = e.target.value;
    const Valid = isCorrect(value);
    setCorrect(isCorrect(value));
    props.setDone(props.id, Valid);
    }

    useGSAP(()=>{

        if(!correct)
        {
            gsap.to( div.current, {backgroundColor: "#C1121F", duration: 1, ease: "power2"});
            gsap.fromTo( wrongIcon.current, {color: "white", y: '100%'}, {y: 0, duration: 1, ease: "power2.inOut"});

        }
        else
        {
            
            gsap.to( div.current, {backgroundColor: "#4F772D", duration: 1, ease: "power2"});
            gsap.fromTo( correctIcon.current, {color: "white", y: '100%'}, {y: 0, duration: 1, ease: "power2.inOut"})
        }
    }, {dependencies: [correct]})


    return(
        <>
            <div className="flex">
                <input type="text" className="bg-[#D9D9D9] rounded-l-md pl-2 focus:outline-none w-20" onChange={(e)=>{change(e);}}/>
                <div className="w-[32px] h-[32px] bg-[#ADADAD] rounded-r-md items-center" ref={div}>
                    {correct && <IconCorrect className="object-contain" ref={correctIcon}/>}
                    {correct == false && <IconWrong className="object-contain" ref={wrongIcon} />}
                </div>
            </div>
        </>
    );
}