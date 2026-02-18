import Link from "next/link";
import Image from "next/image";

export function Status() {
    return (
        <div className={"w-full h-full md:p-10 flex flex-col min-h-screen p-1"}>
            <div className={"h-1/10 w-full text-4xl mb-15 "}>
                Status
            </div>
            <div className={"courses flex flex-wrap flex-col justify-start items-end w-full h-full gap-x-15 gap-y-20 overflow-y-hidden overflow-x-hidden  md:pr-5"}>
                <div className={"flex w-full h-full flex-col gap-y-3"}>
                    <Link href={"/"} className={"w-full h-30 flex justify-start md:gap-10 gap-3 border border-gray-200 shadow-xl shadow-gray-300 rounded-xl "}>
                        <Image src={"/picture.png"} alt={""} width={120} height={120} className={"md:w-2/10 w-3/10 max-w-30"}/>
                        <div className={"md:w-9/10 w-7/10 flex md:gap-15 gap-10 p-1 md:p-0"}>
                            <div className={"w-fit h-full"}>
                                <div className={"md:h-1/2 flex items-center h-full"}>Name</div>
                                <div className={"h-1/2 flex md:visible invisible"}>Lastname</div>
                            </div>
                            <div className={"w-fit h-full"}>
                                <div className={"md:h-1/2 flex items-center h-full"}>Class</div>
                                <div className={"h-1/2 flex md:visible invisible"}>Time</div>
                            </div>
                            <div className={"w-fit h-full flex items-center md:visible invisible"}>
                                <div className={"flex items-center"}>Description</div>

                            </div>
                        </div>
                    </Link> <Link href={"/"} className={"w-full h-30 flex justify-start md:gap-10 gap-3 border border-gray-200 shadow-xl shadow-gray-300 rounded-xl "}>
                        <Image src={"/picture.png"} alt={""} width={120} height={120} className={"md:w-2/10 w-3/10 max-w-30"}/>
                        <div className={"md:w-9/10 w-7/10 flex md:gap-15 gap-10 p-1 md:p-0"}>
                            <div className={"w-fit h-full"}>
                                <div className={"md:h-1/2 flex items-center h-full"}>Name</div>
                                <div className={"h-1/2 flex md:visible invisible"}>Lastname</div>
                            </div>
                            <div className={"w-fit h-full"}>
                                <div className={"md:h-1/2 flex items-center h-full"}>Class</div>
                                <div className={"h-1/2 flex md:visible invisible"}>Time</div>
                            </div>
                            <div className={"w-fit h-full flex items-center md:visible invisible"}>
                                <div className={"flex items-center"}>Description</div>

                            </div>
                        </div>
                    </Link> <Link href={"/"} className={"w-full h-30 flex justify-start md:gap-10 gap-3 border border-gray-200 shadow-xl shadow-gray-300 rounded-xl "}>
                        <Image src={"/picture.png"} alt={""} width={120} height={120} className={"md:w-2/10 w-3/10 max-w-30"}/>
                        <div className={"md:w-9/10 w-7/10 flex md:gap-15 gap-10 p-1 md:p-0"}>
                            <div className={"w-fit h-full"}>
                                <div className={"md:h-1/2 flex items-center h-full"}>Name</div>
                                <div className={"h-1/2 flex md:visible invisible"}>Lastname</div>
                            </div>
                            <div className={"w-fit h-full"}>
                                <div className={"md:h-1/2 flex items-center h-full"}>Class</div>
                                <div className={"h-1/2 flex md:visible invisible"}>Time</div>
                            </div>
                            <div className={"w-fit h-full flex items-center md:visible invisible"}>
                                <div className={"flex items-center"}>Description</div>

                            </div>
                        </div>
                    </Link> <Link href={"/"} className={"w-full h-30 flex justify-start md:gap-10 gap-3 border border-gray-200 shadow-xl shadow-gray-300 rounded-xl "}>
                        <Image src={"/picture.png"} alt={""} width={120} height={120} className={"md:w-2/10 w-3/10 max-w-30"}/>
                        <div className={"md:w-9/10 w-7/10 flex md:gap-15 gap-10 p-1 md:p-0"}>
                            <div className={"w-fit h-full"}>
                                <div className={"md:h-1/2 flex items-center h-full"}>Name</div>
                                <div className={"h-1/2 flex md:visible invisible"}>Lastname</div>
                            </div>
                            <div className={"w-fit h-full"}>
                                <div className={"md:h-1/2 flex items-center h-full"}>Class</div>
                                <div className={"h-1/2 flex md:visible invisible"}>Time</div>
                            </div>
                            <div className={"w-fit h-full flex items-center md:visible invisible"}>
                                <div className={"flex items-center"}>Description</div>

                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}