
export default function Bar(props)
{
    return(
            <div className="w-full h-fit flex items-center justify-center">
                <div className="w-[50%] rounded-b-xl py-2 bg-black flex justify-center items-center">
                    <p className="text-xl font-['Poppins'] font-bold text-white uppercase">{props.text}</p>
                </div>
            </div>
    );
}
