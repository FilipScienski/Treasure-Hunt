import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function HeroText(props)
{
    const ref = useRef();

    useGSAP(()=>{
        gsap.fromTo(ref.current, {autoAlpha: 0}, {autoAlpha: 1, duration: 1, ease: "bounce.inOut"});
    })

    return(
        <>
            <h1 className="w-fit h-fit font-['Poppins'] font-black text-6xl uppercase" ref={ref}>{props.text}</h1>
        </>
    );
}