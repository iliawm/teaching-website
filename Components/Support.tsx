import Link from "next/link";
import Image from "next/image";
import { GiPlainCircle } from "react-icons/gi";
import { MdKeyboardArrowRight } from "react-icons/md";

export function Support() {
    return (
        <div className={"w-full h-full md:p-10 min-h-screen p-1 flex flex-col items-center"}>
            <div className={"h-1/10 w-full text-4xl mb-15 "}>
                Contact us
            </div>
            <div className={"courses flex flex-wrap flex-col justify-start items-end w-full h-full gap-x-15 gap-y-20 overflow-y-scroll md:pr-5 "}>
                <div className={"flex w-full h-full flex-col gap-y-4"}>
                    <Link href={"/"} className={"w-full h-30 flex justify-end gap-10 border border-gray-200 shadow-xl shadow-gray-300 rounded-xl overflow-x-hidden"}>

                        <div className={"w-full flex md:gap-10 gap-3"}>
                            <div className={"w-fit h-full md:p-10 p-5"}>
                                <div className={"h-full flex items-center"}>#332233</div>
                            </div>
                            <div className={"w-fit h-full md:p-10 p-5"}>
                                <div className={"h-full flex items-center"}>
                                    <GiPlainCircle className={"text-yellow-500"}/>
                                    #Status</div>
                            </div>
                            <div className={"w-full h-full flex items-center justify-end p-8 text-2xl"}>
                                <MdKeyboardArrowRight />
                            </div>
                        </div>
                    </Link>




                </div>
            </div>
        </div>
    )
}