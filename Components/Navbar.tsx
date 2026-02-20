"use client"
import Link from "next/link";
import {VscAccount, VscBell} from "react-icons/vsc";
import {useSession} from "@/lib/(auth)/auth-cient";
import {useState} from "react";
import Notification from "@/Ui/Notif";



export default function Navbar() {
    const { data: session } = useSession()
    const logged_in = session?.user
    const [open,setOpen]=useState(false)
    return (
        <div className="w-full  flex justify-center mb-10 relative" >
        <div className="bg-white w-full flex justify-between items-center h-15.5 rounded-full md:px-7 opacity-60 px-3">
            <div className="top-r h-full flex items-center justify-start gap-6" >
                {logged_in?
                    <Link href={`dashboard?section=profile`} className="acc w-12 h-12 text-2xl flex justify-center items-center bg-indigo-500 rounded-full text-white">
                    {`${logged_in.name[0]}`.toUpperCase()}
                </Link> :
                    <Link href={"/auth/signin"} className="acc lg:w-15 lg:text-4xl flex justify-center text-3xl w-fit">
                        <VscAccount />
                    </Link>
                }
                <button className="acc lg:w-15 lg:text-4xl flex justify-center text-3xl w-fit cursor-pointer hover:opacity-70"
                        onClick={()=>{
                            setOpen(!open)
                        }

                        }>
                    <VscBell />
                </button>
               
                {/*<Link href={""} className="acc w-15 text-4xl flex justify-center">*/}

                {/*</Link>*/}
                {/*<Link href={""} className="acc w-15 text-4xl flex justify-center">*/}

                {/*</Link>*/}
            </div>
            <div className="top-l h-full" >

            </div>
        </div>
            <Notification open={open} setOpenA={setOpen}/>
            
        </div>
            )
}

