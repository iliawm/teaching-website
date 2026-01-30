import Link from "next/link";

export function Status() {
    return (
        <div className={"w-full h-full p-10 flex flex-col items-center"}>
            <div className={"h-1/10 w-full text-4xl mb-15 "}>
                Status
            </div>
            <div className={"courses flex flex-wrap flex-col justify-start items-end w-full h-full gap-x-15 gap-y-20 overflow-y-scroll pr-5"}>
                <Link href={"/"} className={"flex justify-end w-full h-full"}>
                    <div className={"w-2/10 h-full "}></div>
                </Link>
            </div>
        </div>
    )
}