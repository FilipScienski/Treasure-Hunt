import { useState, useEffect } from 'react'
import { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function DoneButton(props)
{

    const button = useRef();
    const [counter, setCounter] = useState(0); 
    const anim = useRef();
    
    //const animHover = useRef();

    useGSAP(()=>{
        anim.current = gsap.to(button.current, {backgroundColor: "#58BC82", color: "white", duration: .5, ease: "power2.inOut", paused:true});
        //animHover.current = gsap.to(button.current, {backgroundColor: "#62C370", color: "white", boxShadow: "rgba(98,195,112,50) 0 4px 10px", duration: 1, ease: "power3.inOut", paused: true })
    });
        
    

    useEffect(() => {
        if(counter > 0 )
        {
            if(counter % 2 == 1)
            {
                anim.current.play();
                props.changeStatus(true);
                //console.log(`counter: ${counter}`);
            }
            else
            {
                anim.current.reverse();
                props.changeStatus(false);
            }
            
        } 
    }, [counter]); 

    return(
        <>
            <p className='font-["Poppins"] text-lg font-bold uppercase bg-black text-white py-2 px-6 w-fit h-fit rounded-xl mt-5' ref={button} onClick={() => setCounter(counter => counter + 1)}  >{props.text}</p>
        </>
    );
}