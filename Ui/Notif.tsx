"use client"
import { IoCloseSharp } from "react-icons/io5";
export default function Notification({open, setOpenA}: {open: boolean, setOpenA: (v: boolean) => void}) {

    return(
        <div className={`fixed md:w-100 w-6/10 bg-white h-full inset-0 opacity-100 delay-100 transition-all z-50 ${open?"":"-translate-x-full"}`}>
            <div className={"h-full w-full p-3 top-0 flex flex-col mt-2"}>
                <button className={"text-4xl text-indigo-500 w-fit"} onClick={()=>{
                    setOpenA(!open)
                }}>
                    <IoCloseSharp />
                </button>
                <div className={"h-full w-full p-3 flex flex-col"}>

                </div>
            </div>
        </div>
    )
}