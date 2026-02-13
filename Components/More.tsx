import Signoutbutton from "@/Components/Signoutbutton";


export function More() {
    return (
        <div className={"w-full h-full p-10 flex flex-col items-center"}>
            <div className={"h-1/10 w-full text-4xl mb-15 "}>
            {/*    */}
            </div>
            <div className={"courses flex flex-wrap flex-col justify-start items-end w-full h-full gap-x-15 gap-y-20 overflow-y-scroll pr-5"}>
                <div className={"flex w-full h-full flex-col gap-4"}>
                    <div  className={"w-full h-30 flex justify-end gap-10 border border-gray-200 shadow-xl shadow-gray-300 rounded-xl"}>
                        <div className={"w-full flex gap-15"}>
                            <div className={" h-full p-10 justify-center items-center"}>
                                <div className={"w-fit flex"}>Log Out</div>
                            </div>
                            <div className={"w-full h-full flex items-center justify-end pr-8 text-xl"}>
                                <Signoutbutton />
                            </div>
                        </div>
                        
                    </div>
                    <div  className={"w-full h-30 flex justify-end gap-10 border border-gray-200 shadow-xl shadow-gray-300 rounded-xl"}>
                        <div className={"w-full flex gap-15"}>
                            <div className={" h-full p-10 justify-center items-center flex"}>
                                <button className={" flex cursor-pointer hover:opacity-85"}>Delete account</button>
                            </div>
                            <div className={"w-full h-full flex items-center justify-end pr-8 text-xl"}>
                                <div className={"w-30 h-10 bg-red-500 rounded-xl text-white text-center "}>
                                    Delete
                                </div>
                            </div>
                        </div>

                    </div>





                </div>
            </div>
        </div>
    )
}