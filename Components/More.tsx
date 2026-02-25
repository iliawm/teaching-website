import Signoutbutton from "@/Components/Signoutbutton";


export function More() {
    return (
        <div className={"w-full h-full md:p-10 p-2 min-h-screen flex flex-col items-center justify-start"}>

            <div className={"courses flex flex-wrap flex-col justify-start items-end w-full h-full gap-x-15 gap-y-20 overflow-y-scroll pt-10 md:pr-5"}>
                <div className={"flex w-full h-full flex-col gap-4"}>
                    <div  className={"w-full h-30 flex justify-end gap-10 border border-gray-200 shadow-xl shadow-gray-300 rounded-xl"}>
                        <div className={"w-full flex gap-15 p-3"}>
                            <div className={"w-1/2 h-full flex justify-center items-center"}>
                                <div className={"w-full flex"}>Log Out</div>
                            </div>
                            <div className={"w-full h-full flex items-center justify-end  text-xl"}>
                                <Signoutbutton />
                            </div>
                        </div>
                        
                    </div>
                    <div  className={"w-full h-30 flex justify-end gap-10 border border-gray-200 shadow-xl shadow-gray-300 rounded-xl"}>
                        <div className={"w-full flex gap-15 p-3"}>
                            <div className={"w-1/2 h-full flex justify-center items-center"}>
                                <div className={"w-full flex line-through"}>Delete Account</div>
                            </div>
                            <div className={"w-1/2 h-full flex justify-end items-center"}>
                            <button className={"w-30 h-10 bg-red-500 rounded-xl text-white text-center cursor-pointer hover:opacity-85 lex justify-end items-center"} disabled={true}>
                                Delete Account
                            </button>
                                </div>
                        </div>

                    </div>





                </div>
            </div>
        </div>
    )
}