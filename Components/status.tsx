import Link from "next/link";
import Image from "next/image";

export function Status() {
    return (
        <div className={"w-full h-full p-10 flex flex-col items-center"}>
            <div className={"h-1/10 w-full text-4xl mb-15 "}>
                Status
            </div>
            <div className={"courses flex flex-wrap flex-col justify-start items-end w-full h-full gap-x-15 gap-y-20 overflow-y-scroll pr-5"}>
                <div className={"flex w-full h-full flex-col"}>
                    <Link href={"/"} className={"w-full h-30 flex justify-end gap-10 border border-gray-200 shadow-xl shadow-gray-300 rounded-xl"}>
                        <Image src={"/picture.png"} alt={""} width={120} height={120} className={"w-2/10 max-w-30"}/>
                        <div className={"w-9/10 flex gap-25"}>
                            <div className={"w-fit h-full"}>
                                <div className={"h-1/2 flex items-center"}>Name</div>
                                <div className={"h-1/2 flex"}>Lastname</div>
                            </div>
                            <div className={"w-fit h-full"}>
                                <div className={"h-1/2 flex items-center"}>Class</div>
                                <div className={"h-1/2 flex"}>Time</div>
                            </div>
                            <div className={"w-fit h-full flex items-center"}>
                                <div className={"flex items-center"}>Description</div>

                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}