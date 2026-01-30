import Link from "next/link";

export function Books() {
    return (
        <div className={"w-full h-full p-10 flex flex-col items-center"}>
            <div className={"h-1/10 w-full text-4xl mb-15"}>
                My Books
            </div>
            <div className={"courses flex flex-wrap justify-start items-start w-full h-full gap-x-15 gap-y-20 overflow-y-scroll pr-5"}>
                <Link href={"/"} className={"card w-95 h-80 border border-gray-300 rounded-lg shadow-md shadow-grey-300 flex-col items-center justify-start flex pb-2 p-5 hover:opacity-90"}>
                    <div className={"w-9/10 h-6/10 rounded-lg mb-3 bg-gray-400"}></div>
                    <div className={"w-full h-4/10 flex flex-col items-start "}>
                        <div className="title w-full text-xl opacity-60">My Books</div>
                        <div className="title w-full text-md opacity-40">My Books</div>
                    </div>
                </Link>
            </div>
        </div>





    )


}