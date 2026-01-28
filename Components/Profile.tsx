import Image from "next/image";

export function Profile() {
    return (
        <div className={"flex flex-col w-full p-3"}>
        <div className={"w-ful h-1/10 font-bold flex justify-start items-center text-3xl pl-15"}>
            Profile
        </div>
        <div className={"w-full h-9/10 font-bold flex justify-start f pl-25 max-h-[1080px]"}>
                <div className={"leftside w-1/2 h-full pt-20 flex justify-center items-start "}>
                    <div className="w-8/10 h-6/10 flex justify-center items-start rounded-lg shadow-2xl shadow-gray-300 p-5 right-10 max-w-[280px] min-h-[350px] min-w-[220px] relative">
                        <Image src={"/picture.png"} width={200} height={200} alt={""} className={"w-[100%] relative max-w-[150px]"}/>
                    </div>
                </div>
                <div className={"rightside w-1/2 h-full"}>
                    
                </div>
        </div>
        </div>
    )
}


