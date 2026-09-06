import { NotepadText } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import BarcodeScanner from "react-qr-barcode-scanner";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export default function MainPage()
{
    const [stations, setStations] = useState();
    const scannerRef = useRef();

    useEffect(()=>{
        const data = localStorage.getItem('tasksObj');
        
        const stationsToArray = () => {
            const dataToFeed = JSON.parse(data);
            const array = Object.values(dataToFeed);
            setStations(array);
        }

        stationsToArray();
    }, [])

    useGSAP(()=>{
        gsap.fromTo(scannerRef.current, {yPercent: 0}, {yPercent: -10, ease: "power2.inOut", delay: .6})
    });


    return(
        <>
        <div className="h-[100dvh] overflow-hidden">
        <div className="flex flex-col items-center justify-between py-24">
            <h2 className="font-['poppins'] font-medium text-2xl">Treasure Hunt</h2>
            <div className="flex flex-col gap-2 w-fit">
            {stations?.map((v, i)=>{return(<StationIcon data={v} idx={i} />)})}
            </div>
        </div>
        <div className="absolute bottom z-10 bg-blue-400 w-[90dvw] p-4 h-screen rounded-t-lg left-1/2 -translate-x-1/2 shadow-xl shadow-blue-400" ref={scannerRef}>
            <h2>Zeskanuj kod stacji</h2>
            <BarcodeScanner width={500} height={500} onUpdate={(err, data)=>{
                if(data){console.log(data)}
                else console.log("Nie znaleziono kodu");
            }} />
        </div>
        </div>
        </>
    );
}


function StationIcon({data, idx})
{
    return(
        <div className={`flex items-center gap-4 text-xl w-3xs justify-between`} >
            <div className={`flex items-center gap-2 p-2 w-10 h-10 rounded-md border-2 border-black/30 ${data == true ? "bg-green-500 text-white" : "bg-gray-100 text-black"}`}>

            </div>
            <p>Stacja {idx + 1}</p>
        </div>
    );
}