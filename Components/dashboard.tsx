import Link from "next/link";
import { VscAccount } from "react-icons/vsc";
import { IoLockOpenOutline } from "react-icons/io5";
import { TiFolderDelete } from "react-icons/ti";
import { MdVideoSettings , MdOutlineMedicalInformation , MdSupportAgent } from "react-icons/md";
import { PiChalkboardTeacherLight ,PiBooks } from "react-icons/pi";
import { CgMoreR } from "react-icons/cg";

export function Dashboard({ id }: { id: string }) {
    return (
        <div className={"w-[20%] h-[100%] flex flex-col bg-white absolute z-30 min-w-[170px]"}>
            <div className="title h-[20%] w-full mb-5 text-2xl text-indigo-700 flex items-center justify-center">
                Dashboard
            </div>
            <div className="custom-scrollbar w-full h-75/100 text-xl items-start flex flex-col justify-start p-1 gap-1 bg-white overflow-y-scroll overflow-x-hidden">
                <div className="owned mt-2 text-base opacity-50">Private</div>
                <Link href={`/users/${id}?section=profile`} className="w-full h-8/100 opacity-95 gap-3 flex items-center justify-start min-h-[33px] hover:bg-gray-400 transition-all duration-[1s] ease-linear">
                    <VscAccount className={"text-lg w-10"}/>
                    <div className="w-full flex items-cente justify-start">Profile</div>
                </Link>
                <Link href={`/users/${id}?section=security`} className="w-full h-8/100 opacity-95 gap-3 flex items-center justify-start min-h-[33px] hover:bg-gray-400 transition-all duration-[1s] ease-linear">
                    <IoLockOpenOutline className={"text-lg w-10"}/>
                    <div className="w-full flex items-cente justify-start">security</div>
                </Link>
                <Link href={`/users/${id}?section=other`} className="w-full h-8/100 opacity-95 gap-3 flex items-center justify-start min-h-[33px] hover:bg-gray-400 transition-all duration-[1s] ease-linear">
                    <TiFolderDelete className={"text-lg w-10"}/>
                    <div className="w-full flex items-cente justify-start">Other</div>
                </Link>
                {/*devider*/}
                <div className="owned mt-2 text-base opacity-50">Owned</div>
                <Link href={`/users/${id}?section=courses`} className="w-full h-8/100 opacity-95 gap-3 flex items-center justify-start min-h-[33px] hover:bg-gray-400 transition-all duration-[1s] ease-linear">
                    <PiChalkboardTeacherLight className={"text-lg w-10"}/>
                    <div className="w-full flex items-cente justify-start">Courses</div>
                </Link>
                <Link href={`/users/${id}?section=videos`} className="w-full h-8/100 opacity-95 gap-3 flex items-center justify-start min-h-[33px] hover:bg-gray-400 transition-all duration-[1s] ease-linear">
                    <MdVideoSettings className={"text-lg w-10"}/>
                    <div className="w-full flex items-cente justify-start">Videos</div>
                </Link>
                <Link href={`/users/${id}?section=books`} className="w-full h-8/100 opacity-95 gap-3 flex items-center justify-start min-h-[33px] hover:bg-gray-400 transition-all duration-[1s] ease-linear">
                    <PiBooks className={"text-lg w-10"}/>
                    <div className="w-full flex items-cente justify-start">Books</div>
                </Link>
                <Link href={`/users/${id}?section=status`} className="w-full h-8/100 opacity-95 gap-3 flex items-center justify-start min-h-[33px] hover:bg-gray-400 transition-all duration-[1s] ease-linear">
                    <MdOutlineMedicalInformation className={"text-lg w-10"}/>
                    <div className="w-full flex items-cente justify-start">Status</div>
                </Link>
                {/*devider*/}
                <div className="owned mt-2 text-base opacity-50">Advanced</div>
                <Link href={`/users/${id}?section=support`} className="w-full h-8/100 opacity-95 gap-3 flex items-center justify-start min-h-[33px] hover:bg-green-500 transition-all duration-[1s] ease-linear">
                    <MdSupportAgent className={"text-lg w-10"}/>
                    <div className="w-full flex items-cente justify-start">Support</div>
                </Link>
                <Link href={`/users/${id}?section=more`} className="w-full h-8/100 opacity-95 gap-3 flex items-center justify-start min-h-[33px] hover:bg-red-600 transition-all duration-[1s] ease-linear">
                    <CgMoreR className={"text-lg w-10"}/>
                    <div className="w-full flex items-cente justify-start">More</div>
                </Link>
            </div>
        </div>
    )
}
