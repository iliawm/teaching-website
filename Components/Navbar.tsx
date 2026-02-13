import Link from "next/link";
import { VscAccount , VscBell } from "react-icons/vsc";


export const Navbar = () => {
    const logged_in = false
   
    return (
        <div className="w-full  flex justify-center mb-10 relative" >
        <div className="bg-white text-black flex justify-between items-center w-19/20 h-15.5 rounded-full px-7 opacity-60">
            <div className="top-r h-full flex items-center justify-start gap-6" >
                {logged_in?
                    <Link href={`/dashboard`} className="acc w-12 h-12 text-2xl flex justify-center items-center bg-indigo-500 rounded-full text-white">
                    {`a`.toUpperCase()}
                </Link> :
                    <Link href={"/auth/signup"} className="acc w-15 text-4xl flex justify-center">
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

