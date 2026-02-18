"use client"
export default function Security() {
    return (
        <div className={"w-8/10 h-fit flex justify-center items-center shadow-md shadow-gray-300 rounded-2xl"}>
            <div className="bot w-full h-full flex p-8  text-sm font-medium flex-col items-start">
                <div className={" mb-10 text-4xl font-extrabold "}>Security</div>

                <div className={"w-full h-full flex flex-col  md:px-10 pt-20"}>
                    <div className={"opacity-60 mb-4"}>Current password</div>
                    <input type="password" className={"md:w-7/10 w-9/10 h-10 border border-gray-300 rounded outline-0 focus:ring-0 mb-10"}/>
                    <div className={"opacity-60 mb-4"}>New password</div>
                    <input type="password" className={"md:w-7/10 w-9/10 h-10 border border-gray-300 rounded outline-0 focus:ring-0 mb-10"}/>
                    <div className={"opacity-60 mb-4"}>Repeat password</div>
                    <input type="password" className={"md:w-7/10 w-9/10 h-10 border border-gray-300 rounded outline-0 focus:ring-0 mb-10"}/>
                    <input type="submit" className={"w-full h-10 border border-gray-300 rounded outline-0 focus:ring-0 mb-10 hover:bg-gray-400 transition-all duration-500 ease-linear"} onClick={()=>{

                    }}/>
                </div>
            </div>
        </div>
    )
}
