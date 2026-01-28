import React from 'react'
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";

export function Profile() {
    return (
        <div className={"flex flex-col w-full p-3"}>
        <div className={"w-ful h-1/10 font-bold flex justify-start items-center text-3xl pl-15"}>
            Profile
        </div>
        <div className={"w-full h-9/10 font-bold flex justify-start f pl-25"}>
                <div className={"leftside w-1/2 h-full"}>

                </div>
                <div className={"rightside w-1/2 h-full"}>
                    
                </div>
        </div>
        </div>
    )
}


