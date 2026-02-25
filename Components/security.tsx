"use client"
import {signOut} from "@/lib/(auth)/auth-cient";
import {useState} from "react";
import {authClient} from "@/lib/(auth)/auth-cient";
import {useRouter} from "next/navigation";

export default function Security() {
    
    const [currentPass, setCurrentPass] = useState("")
    const [newPass, setNewPass] = useState("")
    const [repeatPass, setRepeatPass] = useState("")
    const router = useRouter()
    const[loading, setLoading] = useState(false)
    async function handlesubmit(e: React.FormEvent){
        setLoading(true)
        e.preventDefault()

        if(newPass !== repeatPass) {
            alert("Passwords don't match")
            return
        }

        const result = await authClient.changePassword({
            currentPassword: currentPass,
            newPassword: newPass
        })

        if(result.error) {
            alert(result.error.message || "Failed to change password")
        } else {
            alert("Password changed successfully")
        }
        setLoading(false)
        await signOut()
        router.push("/auth/signin")
    }


    return (
        <div className={"w-8/10 h-fit flex justify-center items-center shadow-md shadow-gray-300 rounded-2xl"}>
            <div className="bot w-full h-full flex p-8 text-sm font-medium flex-col items-start">
                <div className={"mb-10 text-4xl font-extrabold"}>Security</div>
                <form onSubmit={handlesubmit} className={"w-full h-full flex flex-col md:px-10 pt-20"}>
                    <div className={"opacity-60 mb-4"}>Current password</div>
                    <input type="password" value={currentPass} onChange={(e)=>setCurrentPass(e.target.value)} className={"md:w-7/10 w-9/10 h-10 border border-gray-300 rounded outline-0 focus:ring-0 mb-10 pl-3"} required/>
                    <div className={"opacity-60 mb-4"}>New password</div>
                    <input type="password" value={newPass} onChange={(e)=>setNewPass(e.target.value)} className={"md:w-7/10 w-9/10 h-10 border border-gray-300 rounded outline-0 focus:ring-0 mb-10 pl-3"} required minLength={8}/>
                    <div className={"opacity-60 mb-4"}>Repeat password</div>
                    <input type="password" value={repeatPass} onChange={(e)=>setRepeatPass(e.target.value)} className={"md:w-7/10 w-9/10 h-10 border border-gray-300 rounded outline-0 focus:ring-0 mb-10 pl-3"} required minLength={8}/>
                    <button type="submit" className={"w-full h-10 border border-gray-300 rounded outline-0 focus:ring-0 mb-10 hover:bg-gray-400 transition-all duration-500 ease-linear"}>{!loading? "Change Password": "loading . . ."}</button>
                </form>
            </div>
        </div>
    )
}
