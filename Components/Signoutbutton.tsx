"use client"


import {signOut} from "@/lib/(auth)/auth-cient";
import {useRouter} from "next/navigation";
import {error} from "better-auth/api";

export default function Signoutbutton(){
    const router = useRouter();
    return(
        <button className={"w-30 h-10 bg-red-500 rounded-xl text-white text-center cursor-pointer hover:opacity-85"} onClick={async ()=>{
            const result = await signOut();
            if(result?.data){
                router.push("/auth/signin")
            }

        }}>
            Logout
        </button>
    )
}