"use client"
import {useState} from "react";
import { IoCloseSharp } from "react-icons/io5";
const Notification = () => {
    const [open,setOpen]= useState(true);
    const [Message,setMessage]= useState("");

    return (
        <div className={`fixed bottom-0 right-0 bg-indigo-600 rounded-3xl text-white font-semibold w-80 h-40 p-5 mb-3 mr-2 flex flex-col gap-9 ${open? "visible":"invisible"}`}>
            <div className={"w-full h-2/10 flex items-center justify-end text-3xl "}><button onClick={()=>{
                setOpen(false)
            }}><IoCloseSharp /></button></div>
            <div className={"w-full h-2/10 flex items-center justify-start text-lg "}>please note that the side bar is accessible through the blue button on top of the page </div>
        </div>
    )
}
export default Notification
