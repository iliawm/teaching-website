"use client"
import Link from "next/link";
import {useState} from "react";
import {signUp} from "@/lib/(auth)/auth-cient";
import {useRouter} from "next/navigation";
import {IoHome} from "react-icons/io5";

const SignUp = () => {
    const [name,SetName] = useState("");
    const [pass,SetPass] = useState("");
    const [email,setEmail] = useState("");

    const [error,SetError] = useState("");
    const [loading,Setloading] = useState(false);
    const router = useRouter()

async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    SetError("")
    Setloading(true);
    try{
    const  result = await signUp.email({
        email,
        password : pass,
        name,
    })
        if(result.error){
            SetError(result.error.message ?? "failed to sign up");
        }
        else {
            router.push("/dashboard")
        }

    }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    catch(err){
        SetError("an unexpected error occurred");
    }
    finally{Setloading(false)}
}
    return (
        <section>
            <div  className={"min-h-screen min-w-screen  bg-blue-50  flex items-center justify-center p-10"}>
                <Link href={"/"} className={"rounded-2xl bg-indigo-600 w-14 h-14 top-0 right-0 mt-4 mr-5 fixed text-2xl text-white font-semibold flex items-center justify-center"}><IoHome /></Link>

                <div className={"bg-white w-100 h-fit rounded-xl shadow-xl shadow-gray-500  p-5"}>
                    <div className={"border-b pb-3 flex flex-col"}>
                        <h1 className={" text-4xl mb-4 font-semibold"}>SignUp</h1>
                        <h3 className={"text-sm"}>Already have an account? <Link  href={"/auth/signin"}  className={"text-indigo-400"}>LogIn</Link></h3>
                    </div>
                    {error&&
                        <div className={"w-full rounded-md h-10 bg-destructive/85 flex justify-start items-center text-white  p-4"}>
                            {error}
                        </div>
                    }
                    <form onSubmit={handleSubmit} action="" className={"flex items-center pt-3  flex-col h-full w-full gap-2"}>
                        <div  className={"mt-2  w-full"} >
                            <label htmlFor="Email" className={"text-sm  mb-1 font-semibold"} >Email</label>
                            <input id={"Email"} type={"email"} placeholder={"JohnDoe@example.com"} value={email} className={"text-gray-500 focus:outline-none border border-gray-300 rounded-md p-2 mb-4 focus:border-indigo-800 placeholder:text-sm text-sm  w-full h-13"}  required onChange={(e)=>{
                                setEmail(e.target.value)
                            }}/>
                        </div>
                        <div  className={"mt-2  w-full"} >
                            <label htmlFor="name" className={"text-sm  mb-1 font-semibold"} >Username</label>
                            <input id={"name"} type={"text"} placeholder={"John Doe"} value={name} className={"text-gray-500 focus:outline-none border border-gray-300 rounded-md p-2 mb-4 focus:border-indigo-800 placeholder:text-sm text-sm  w-full h-13"}  required onChange={(e)=>{
                                SetName(e.target.value)

                            }}/>
                        </div>
                        <div  className={"  w-full"} >
                            <label htmlFor="password" className={"text-sm  mb-1 font-semibold"} >Password</label>
                            <input id={"password"} type={"password"} placeholder={"12345678"} value={pass}  minLength={8} className={"text-gray-500 focus:outline-none border border-gray-300 rounded-md p-2 mb-4 focus:border-indigo-800 placeholder:text-sm text-sm  w-full h-13"} required onChange={(e)=>{
                                SetPass(e.target.value)

                            }}/>

                        </div>

                        <button type={"submit"} className={"bg-indigo-400 w-full h-15 rounded-lg text-white"} disabled={loading}>
                            {loading ? "Creating account..." :"SignIn"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default SignUp
