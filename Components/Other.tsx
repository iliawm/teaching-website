"use client"
export default function Other() {
    return (
        <div className={"w-8/10 h-fit flex justify-center items-center shadow-lg shadow-gray-300 rounded-2xl"}>
            <div className="bot w-full h-full flex p-8  text-sm font-medium flex-col items-start">
                <div className={" mb-10 text-4xl font-extrabold "}>Other</div>

                <div className={"w-full h-full flex flex-row px-5 pt-5"}>
                    <div className={"flex flex-col gap-10 w-1/2"}>
                        <div className={"text-2xl font-extrabold"}>Event</div>
                        <div className={"opacity-60 mb-10 h-7"}>Receive Advertising Emails</div>
                        <div className={"opacity-60 mb-10 h-7"}>Item B</div>
                        <div className={"opacity-60 mb-10 h-7"}>item C</div>
                        <div className={"opacity-60 mb-10 h-7"}>Item D</div>
                        <div className={"opacity-60 mb-10 h-7"}>Item f</div>
                     </div>
                    <div className={"flex flex-col gap-10 w-1/2"}>
                        <div className={"text-2xl font-extrabold"}>Checkbox</div>
                        <input type="checkbox" className={"w-3/10 h-7 border border-gray-300 rounded outline-0 focus:ring-0 mb-10"}/>
                        <input type="checkbox" className={"w-3/10 h-7 border border-gray-300 rounded outline-0 focus:ring-0 mb-10"}/>
                        <input type="checkbox" className={"w-3/10 h-7 border border-gray-300 rounded outline-0 focus:ring-0 mb-10"}/>
                        <input type="checkbox" className={"w-3/10 h-7 border border-gray-300 rounded outline-0 focus:ring-0 mb-10"}/>
                        <input type="checkbox" className={"w-3/10 h-7 border border-gray-300 rounded outline-0 focus:ring-0 mb-10"}/>
                      </div>

                </div>
            </div>
        </div>
    )
}