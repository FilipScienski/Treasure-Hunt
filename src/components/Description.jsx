export default function Description(props)
{

    
    return(
        <>
            {props.title ? props.small ? props.reduceMargin ?
            <div className="w-[90%] mx-auto mt-2">
                <h2 className="font-['Poppins'] font-black text-3xl uppercase">Task</h2>
                <p className="font-['Poppins'] font-bold text-sm text-pretty">{props.text}</p>
            </div> 
            :<div className="w-[90%] mx-auto mt-10">
                <h2 className="font-['Poppins'] font-black text-3xl uppercase">Task</h2>
                <p className="font-['Poppins'] font-bold text-sm text-pretty">{props.text}</p>
            </div>
            :<div className="w-[90%] mx-auto mt-15">
                <h2 className="font-['Poppins'] font-black text-3xl uppercase">Task</h2>
                <p className="font-['Poppins'] font-bold text-xl text-pretty">{props.text}</p>
            </div>

            : props.small ? props.text.length < 20 ? 
            <div className="w-[90%] mx-auto mt-1">
                <p className="font-['Poppins'] font-bold text-md text-pretty min-h-50 max-h-50 overflow-y-auto">{props.text}</p>
            </div> 
            : <div className="w-[90%] mx-auto mt-2">
                <p className="font-['Poppins'] font-bold text-sm text-pretty max-h-50 overflow-y-auto">{props.text}</p>
            </div> : props.text.length < 20 ? 
            <div className="w-[90%] mx-auto mt-1">
                <p className="font-['Poppins'] font-bold text-lg text-pretty min-h-50 max-h-50 overflow-y-auto">{props.text}</p>
            </div> 
            : <div className="w-[90%] mx-auto mt-2">
                <p className="font-['Poppins'] font-bold text-lg text-pretty max-h-50 overflow-y-auto">{props.text}</p>
            </div>}
        </>
    );
}