import Link from "next/link";
import { VscAccount , VscBell } from "react-icons/vsc";
import {getSession} from "@/lib/(auth)/auth";


export default async function  Navbar()  {
    const  session =await getSession()
    const logged_in = session?.user
   console.log("logged_in", logged_in)
    return (
        <div className="w-full  flex justify-center mb-10 relative" >
        <div className="bg-white text-black flex justify-between items-center w-19/20 h-15.5 rounded-full px-7 opacity-60">
            <div className="top-r h-full flex items-center justify-start gap-6" >
                {logged_in?
                    <Link href={`/dashboard`} className="acc w-12 h-12 text-2xl flex justify-center items-center bg-indigo-500 rounded-full text-white">
                    {`${logged_in.name[0]}`.toUpperCase()}
                </Link> :
                    <Link href={"/auth/signin"} className="acc w-15 text-4xl flex justify-center">
                        <VscAccount />
                    </Link>
                }
                <Link href={""}  className="acc w-15 text-4xl flex justify-center">
                    <VscBell />
                </Link>
                {/*<Link href={""} className="acc w-15 text-4xl flex justify-center">*/}

                {/*</Link>*/}
                {/*<Link href={""} className="acc w-15 text-4xl flex justify-center">*/}

                {/*</Link>*/}
            </div>
            <div className="top-l h-full" >

            </div>
        </div>
        </div>
            )
}

