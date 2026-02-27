"use client"
import Link from "next/link";
import {VscAccount, VscBell} from "react-icons/vsc";
import {useSession} from "@/lib/(auth)/auth-cient";
import {useState} from "react";
import Notification from "@/Ui/Notif";
import { MdHome } from "react-icons/md";
import {usePathname, useRouter} from "next/navigation";
import { CiSearch } from "react-icons/ci";


export default function Navbar() {
    const { data: session } = useSession()
    const logged_in = session?.user
    const [open,setOpen]=useState(false)
    const router = useRouter()
    const [search,setsearch]=useState(false)
    const pathname = usePathname()

    return (
        <div className="w-full  flex justify-center mb-10 relative" >
        <div className="bg-white w-full flex justify-between items-center h-15.5 rounded-full md:px-7 opacity-60 px-3">
            <div className={`w-full top-r h-full md:flex items-center justify-between  ${search?"hidden":"flex"}`} >

                <div className={`flex items-center justify-start gap-6 ${search ? "hidden md:flex" : "flex" }`}>

                {logged_in?
                    <Link href={`dashboard?section=profile`} className={`acc  w-12 h-12 text-2xl flex justify-center items-center bg-indigo-500 rounded-full text-white`}>
                    {`${logged_in.name[0]}`.toUpperCase()}
                </Link> :
                    <Link href={"/auth/signin"} className="acc lg:w-15 lg:text-4xl flex justify-center text-3xl w-fit">
                        <VscAccount />
                    </Link>
                }
                <button className="acc lg:w-15 lg:text-4xl flex justify-center text-3xl w-fit cursor-pointer hover:opacity-70"
                        onClick={()=>{
                            if (logged_in) {
                                setOpen(!open)
                            } else {
                                router.push("/auth/signin")
                            }
                        }

                        }>
                    <VscBell />
                </button>
                    
                </div>
                
               
                {/*<Link href={""} className="acc w-15 text-4xl flex justify-center">*/}

                {/*</Link>*/}
                {/*<Link href={""} className="acc w-15 text-4xl flex justify-center">*/}

                {/*</Link>*/}
            </div>

            
                <div className={"p-1 h-full mr-2 flex w-full justify-end"}>
                    <input type={"search"} className={`md:w-full h-full transition-all ease-linear focus:outline-0 border-gray-400 border rounded-lg p-3 ${search? "w-2/3 opacity-100" : "w-0 pointer-events-none opacity-0" }`} placeholder={"Start typing to search"} onChange={(e)=>{
                        router.push(`/products?search=${e.target.value}`)
                    }}/>
                </div>
            
            <button className={`top-l md:w-15 lg:text-4xl flex justify-center text-2xl w-fit cursor-pointer hover:opacity-70 mr-2 text-indigo-600 `} onClick={()=>{
                
                if(pathname === "/"){
                router.push("/products")
            }
            else if (pathname === "/products"){
                    setsearch(!search)
                }
            }}>
                <CiSearch />
            </button>
            <Link href={"/"} className="top-l md:w-15 lg:text-4xl flex justify-center text-4xl w-fit cursor-pointer hover:opacity-70 mr-2 text-indigo-600" >
                <MdHome />
            </Link>

        </div>
            <Notification open={open} setOpenA={setOpen}/>
            
        </div>
            )
}

