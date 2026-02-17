"use client"
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";
import { IoLockOpenOutline } from "react-icons/io5";
import { TiFolderDelete } from "react-icons/ti";
import { MdVideoSettings , MdOutlineMedicalInformation , MdSupportAgent } from "react-icons/md";
import { PiChalkboardTeacherLight ,PiBooks } from "react-icons/pi";
import { CgMoreR } from "react-icons/cg";
import { useSearchParams } from "next/navigation";

export function Dashboard() {
    const searchParams = useSearchParams()
    const sidebar = searchParams.get('sidebar')

    return (
        <div className={`w-2/10 h-full flex flex-col bg-white absolute z-30 min-w-42.5 delay-200 ease-out transition-all ${sidebar === 'false' ? 'transform -translate-x-full ' : ''}`}>
            <div className="title h-[20%] w-full mb-5 text-2xl text-indigo-700 flex items-center justify-center font-bold">
                Dashboard
            </div>
            <div className="custom-scrollbar w-full h-75/100 text-xl items-start flex flex-col justify-start p-1 gap-1 bg-white overflow-y-scroll overflow-x-hidden">
                <div className="owned mt-2 text-base opacity-50">Private</div>
                <Link href={`/dashboard/?section=profile`} className="w-full h-8/100 opacity-95 gap-3 flex items-center justify-start min-h-8.25 hover:bg-gray-400 transition-all duration-1000 ease-linear">
                    <VscAccount className={"text-lg w-10"}/>
                    <div className="w-full flex items-cente justify-start">Profile</div>
                </Link>
                <Link href={`/dashboard/?section=security`} className="w-full h-8/100 opacity-95 gap-3 flex items-center justify-start min-h-8.25 hover:bg-gray-400 transition-all duration-1000 ease-linear">
                    <IoLockOpenOutline className={"text-lg w-10"}/>
                    <div className="w-full flex items-cente justify-start">security</div>
                </Link>
                <Link href={`/dashboard/?section=other`} className="w-full h-8/100 opacity-95 gap-3 flex items-center justify-start min-h-8.25 hover:bg-gray-400 transition-all duration-1000 ease-linear">
                    <TiFolderDelete className={"text-lg w-10"}/>
                    <div className="w-full flex items-cente justify-start">Other</div>
                </Link>
                {/*division*/}
                <div className="owned mt-2 text-base opacity-50">Owned</div>
                <Link href={`/dashboard/?section=courses`} className="w-full h-8/100 opacity-95 gap-3 flex items-center justify-start min-h-8.25 hover:bg-gray-400 transition-all duration-1000 ease-linear">
                    <PiChalkboardTeacherLight className={"text-lg w-10"}/>
                    <div className="w-full flex items-cente justify-start">Courses</div>
                </Link>
                <Link href={`/dashboard/?section=videos`} className="w-full h-8/100 opacity-95 gap-3 flex items-center justify-start min-h-8.25 hover:bg-gray-400 transition-all duration-1000 ease-linear">
                    <MdVideoSettings className={"text-lg w-10"}/>
                    <div className="w-full flex items-cente justify-start">Videos</div>
                </Link>
                <Link href={`/dashboard/?section=books`} className="w-full h-8/100 opacity-95 gap-3 flex items-center justify-start min-h-8.25 hover:bg-gray-400 transition-all duration-1000 ease-linear">
                    <PiBooks className={"text-lg w-10"}/>
                    <div className="w-full flex items-cente justify-start">Books</div>
                </Link>
                <Link href={`/dashboard/?section=status`} className="w-full h-8/100 opacity-95 gap-3 flex items-center justify-start min-h-8.25 hover:bg-gray-400 transition-all duration-1000 ease-linear">
                    <MdOutlineMedicalInformation className={"text-lg w-10"}/>
                    <div className="w-full flex items-cente justify-start">Status</div>
                </Link>
                {/*division*/}
                <div className="owned mt-2 text-base opacity-50">Advanced</div>
                <Link href={`/dashboard/?section=support`} className="w-full h-8/100 opacity-95 gap-3 flex items-center justify-start min-h-8.25 hover:bg-green-500 transition-all duration-1000 ease-linear">
                    <MdSupportAgent className={"text-lg w-10"}/>
                    <div className="w-full flex items-cente justify-start">Support</div>
                </Link>
                <Link href={`/dashboard/?section=more`} className="w-full h-8/100 opacity-95 gap-3 flex items-center justify-start min-h-8.25 hover:bg-red-600 transition-all duration-1000 ease-linear">
                    <CgMoreR className={"text-lg w-10"}/>
                    <div className="w-full flex items-cente justify-start">More</div>
                </Link>
            </div>
        </div>
    )
}
