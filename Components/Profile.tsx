"use client"
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { ExtendedSession } from "@/types/auth"
import {useSession} from "@/lib/(auth)/auth-cient";
import {useState} from "react";

export function Profile() {

    const {data: session} = useSession() as { data: ExtendedSession | null }
    const prof = session?.user
    const [phone,setphone] = useState("")
    const [email,setemail] = useState("")
    const [username,setusername] = useState("")
    const [descr,setdesc] = useState("")
    async function handlesubmit(){
        const updates: any = {}

        if (phone && phone !== (prof?.PhoneNumber || "")) updates.PhoneNumber = phone
        if (email && email !== prof?.email) updates.email = email
        if (username && username !== prof?.name) updates.name = username
        if (descr && descr !== prof?.desc) updates.desc = descr

        if (Object.keys(updates).length > 0) {
            await fetch('/api/update-profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updates)
            })
            window.location.reload()
        }
    }
    return (
        <div className={"flex flex-col w-full  min-w-screen md:min-w-fit justify-center min-h-screen absolute top-40 md:top-0 "}>
        <div className={"w-full h-1/10 font-extrabold flex justify-start items-center text-4xl  pl-4 md:pl-0  mb-4"}>
            Profile
        </div>
        <div className={"w-full h-9/10 font-bold flex md:justify-start  max-h-270 md:flex-row flex-col-reverse justify-center items-center gap-2 "}>
                <div className={"md:leftside w-full h-full  flex justify-center md:items-start"}>
                    <div className=" w-full h-fit flex justify-start items-center rounded-lg shadow-2xl shadow-gray-300 p-5 md:right-10 max-w-90 max-h-112.5 min-h-87.5 min-w-55 relative flex-col">
                        <Image src={`${prof? prof.image : "/picture.png" }`} width={1800} height={1800} alt={""} className={"w-full relative max-w-62.5 object-cover"} priority/>
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
                            <div className={"opacity-60 mb-4 "}>you can change your credentials here</div>
                            <form className={"w-full"} onSubmit={async(e)=>{
                                e.preventDefault()
                                await handlesubmit()
                            }}>
                            <div className={"opacity-60 mb-4"}>phone</div>
                            <input type="number" className={"w-full h-10 border border-gray-300 rounded outline-0 focus:ring-0 mb-10 pl-3 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"} placeholder={`${prof?.PhoneNumber || "No phone number"}`} onChange={(e)=>{
                                if(e.target.value.length <= 11) setphone(e.target.value)
                                else {
                                window.alert("must be 11 characters (IR) e.g(91234567890)")
                                }

                                }}/>
                            <div className={"opacity-60 mb-4"}>Email</div>
                            <input type="email" className={"w-full h-10 border border-gray-300 rounded outline-0 focus:ring-0 mb-10 pl-3"} placeholder={`${
                                prof?.email
                            }`}  onChange={(e)=>{
                                setemail(e.target.value)

                            }}/>
                            <div className={"opacity-60 mb-4"}>username</div>
                            <input type="text" className={"w-full h-10 border border-gray-300 rounded outline-0 focus:ring-0 mb-10 pl-3"} onChange={(e)=>{
                                setusername(e.target.value)
                            }}/>
                                <div className={"opacity-60 mb-4"}>description</div>
                            <input type="text" className={"w-full h-10 border border-gray-300 rounded outline-0 focus:ring-0 mb-10 pl-3"} onChange={(e)=>{
                                setdesc(e.target.value)
                            }} placeholder={prof?.desc}/>
                            <input type="submit" className={"w-full h-10 border border-gray-300 rounded outline-0 focus:ring-0 mb-10 hover:bg-gray-400 transition-all duration-500 ease-linear cursor-pointer"} />
                            </form>



                        </div>
                    </div>
                </div>
        </div>
        </div>
    )
}


