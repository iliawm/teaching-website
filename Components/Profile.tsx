"use client"
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { ExtendedSession } from "@/types/auth"
import {useSession} from "@/lib/(auth)/auth-cient";

export function Profile() {

    const {data: session} = useSession() as { data: ExtendedSession | null }
    const prof = session?.user
 
    function handlesubmit(){


    }
    return (
        <div className={"flex flex-col w-full   min-w-screen md:min-w-fit pt-100 md:pt-20 min-h-screen"}>
        <div className={"w-full h-1/10 font-extrabold flex justify-start items-center text-4xl pt-10 md:pl-15 pl-4"}>
            Profile
        </div>
        <div className={"w-full h-9/10 font-bold flex md:justify-start md:pl-20 max-h-270 md:flex-row flex-col justify-center items-center gap-14 "}>
                <div className={"md:leftside w-full h-full pt-20 flex justify-center md:items-start"}>
                    <div className=" w-full h-fit flex justify-start items-center rounded-lg shadow-2xl shadow-gray-300 p-5 md:right-10 max-w-90 max-h-112.5 min-h-87.5 min-w-55 relative flex-col">
                        <Image src={`${prof? prof.image : "/picture.png" }`} width={1800} height={1800} alt={""} className={"w-[100%] relative max-w-[250px] object-cover"} priority/>
                        <div className={"w-full h-full flex flex-col justify-start p-3 gap-5 pt-6"}>
                            <div className={"text-xl"}>{prof?.name}</div>
                            <div className={"text-md opacity-45 flex flex-row items-center gap-3 "}><CiLocationOn />
                                {prof?.desc}
                            </div>
                            <div className={"text-xl flex flex-row items-center gap-3  opacity-75"}>
                                <div className={"text-yellow-500 text-2xl  flex items-center"}><FaStar /></div>
                                <div className={"text-xl font-light flex"}> {prof?.review} / 5</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={"rightside w-3/5 h-full flex justify-center items-center min-w-75"}>
                    <div className={"w-full h-fit shadow-gray-300 shadow-xl rounded-2xl"}>
                        <div className="top w-full h-1/10 flex p-5 text-2xl font-bold items-center ">
                            profile
                        </div>
                        <div className="bot w-full h-9/10 flex p-5 py-0 text-sm font-medium flex-col items-start">
                            <div className={"opacity-60 mb-4"}>you can change your credentials here</div>
                            <form onSubmit={async(e)=>{
                                e.preventDefault()
                            }}>
                            <div className={"opacity-60 mb-4"}>phone</div>
                            <input type="tel" className={"w-full h-10 border border-gray-300 rounded outline-0 focus:ring-0 mb-10 pl-3"} placeholder={`${prof?.PhoneNumber || "No phone number"}
`}/>
                            <div className={"opacity-60 mb-4"}>Email</div>
                            <input type="email" className={"w-full h-10 border border-gray-300 rounded outline-0 focus:ring-0 mb-10 pl-3"} placeholder={`${
                                prof?.email
                            }`}/>
                            <div className={"opacity-60 mb-4"}>username</div>
                            <input type="text" className={"w-full h-10 border border-gray-300 rounded outline-0 focus:ring-0 mb-10 pl-3"} />
                            <input type="submit" className={"w-full h-10 border border-gray-300 rounded outline-0 focus:ring-0 mb-10 hover:bg-gray-400 transition-all duration-500 ease-linear cursor-pointer"} onClick={()=>{
                                
                            }}/>
                            </form>



                        </div>
                    </div>
                </div>
        </div>
        </div>
    )
}


