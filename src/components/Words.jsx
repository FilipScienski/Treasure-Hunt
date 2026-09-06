import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Words(props)
{
    //const [counter, setCounter] = useState(0); 
    const [activeIndex, setActiveIndex] = useState(null);
    const [valid, setValid]= useState(false);
    const Option = useRef([]);
    const anim = useRef();

    Option.current = []; //ini refów
    
    useGSAP(()=>{
        anim.current = gsap.to(Option.current, {backgroundColor: "#58BC82", color: "white", duration: .5, ease: "power2.inOut", paused:true});
    });
    
    function isValid(index)
    {
        return props.words[index] == props.answer;
    }

    function handleClick(index)
    {
        let val = isValid(index);
        props.changeActive(val);
        setValid(val);
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    }

    ///
    useEffect(() => {
        Option.current.forEach(el => {
            gsap.to(el, { backgroundColor: "#ccc", color: "black", duration: 0.3 });
        }
        );
        if (activeIndex !== null) {

            gsap.to(Option.current[activeIndex], { backgroundColor: "#6D6A75", color: "white", duration: 0.5 });
    }
    }, [activeIndex]);

    const addToRefs = (el) => {
        if (el && !Option.current.includes(el)) {
        Option.current.push(el);
        }
    };


    return(
        <>
            <div className="flex flex-wrap gap-2 w-[80%] items-center justify-between">
                {props.words.map((item, index) => (
                    <p className="bg-gray-400 p-2 text-xl rounded-sm" key={index} ref={addToRefs} onClick={()=>{handleClick(index)}}>{item}</p>
                ))}
            </div>
        </>
    );
}