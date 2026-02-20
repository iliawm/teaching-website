"use client"
import {MdHome} from "react-icons/md";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import {useRouter} from "next/navigation";
import {useState} from "react";
export default function DashboardNavhandle({open, setOpenA}: {open: boolean, setOpenA: (v: boolean) => void}) {
const [button , setbutton]=useState(false)
    
    const router = useRouter()
    return (
        <div className={`fixed top-0 right-0 mt-4 mr-4 text-white font-semibold text-3xl bg-indigo-600 z-50 transition-all ease-linear rounded-2xl duration-500 ${button?"w-14.5  md:w-20 h-30 p-1 md:h-40":"w-14.5 h-13.5"}`}>
            <div className={`w-full h-full dashbtn   flex justify-center items-center`} onClick={()=>{
                setbutton(!button)
            }}>
                {button ?
                    <div className={" rounded-2xl w-full! h-full flex flex-col z-50"}>
                        <button className={"text-4xl font-semibold  h-full flex items-center justify-center cursor-pointer hover:opacity-60"} onClick={()=>{setbutton(false)}}><IoCloseSharp /></button>
                            <button className={"text-3xl font-semibold  h-full flex items-center justify-center cursor-pointer hover:opacity-60"}><Link href={"/"}><MdHome /></Link></button>
                        <button className={"text-3xl font-semibold  h-full flex items-center justify-center cursor-pointer hover:opacity-60"} onClick={()=>{

                            setOpenA((!open))
                        }}><GiHamburgerMenu /></button>
    

                    </div>
                    : <MdHome />}
            </div>
        </div>
    )
}

