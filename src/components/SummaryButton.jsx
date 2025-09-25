import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
//import { useEffect } from "react";
import { useRef } from "react";
import { useOutletContext } from "react-router-dom";


export default function Summary(props) {
    const button = useRef();
    const GSAPBUTTON = gsap.utils.selector(button);

    const arrow = useRef();
    const timeline = useRef(null);
    const {goTo} = useOutletContext();

    useGSAP(()=>{
        timeline.current = gsap.timeline({paused:true, onComplete: () => {changePage()}});
        timeline.current.fromTo(button.current, {backgroundColor: "#BFBDC1"}, { boxShadow:"0px 0px 20px #BFBDC1" ,duration: .2, ease: "power2.inOut"});
        timeline.current.fromTo(GSAPBUTTON("h5"), {autoAlpha: 1}, { autoAlpha: 0, y: "10" , duration: .5, ease: "power2.inOut"});
        timeline.current.fromTo(arrow.current, { marginLeft: "-32px", x: -100, opacity: 0}, {x: -10, opacity: 1, duration: .2});

    }, []);

    function handleClick()
    {
        timeline.current.play();
    }


    function changePage()
    {
        goTo(`/${props.target}`);
    }


  return (
    <>
        <div className="uppercase rounded-xl font-['Poppins'] px-4 py-2 font-bold text-[#090809] flex items-center" onClick={handleClick} ref={button}>
            <h5>Podsumowanie</h5>
            <div ref={arrow} className="" >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
            </div>
        </div>        
    </>
  );
}