export default function Description(props)
{
    return(
        <>
            <div className="w-[90%] mx-auto mt-15">
                <h2 className="font-['Poppins'] font-black text-3xl uppercase">Task</h2>
                <p className="font-['Poppins'] font-bold text-xl text-pretty">{props.text}</p>
            </div>
        </>
    );
}