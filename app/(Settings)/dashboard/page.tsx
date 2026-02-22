"use client"
import {Profile} from "@/Components/Profile";
import {Courses} from "@/Components/courses";
import {Video} from "@/Components/Video";
import {Books} from "@/Components/Books";
import {Status} from "@/Components/status";
import Security from "@/Components/security";
import Other from "@/Components/Other";
import {Support} from "@/Components/Support";
import {More} from "@/Components/More";
import DashboardNavhandle from "@/Components/DashboardNavhandle";
import { useSearchParams } from "next/navigation";
import { useSession } from "@/lib/(auth)/auth-cient";
import {Dashboard} from "@/Components/dashboard";
import {useState} from "react";

export default function DashboardClient() {
    const searchParams = useSearchParams()
    const section = searchParams.get('section')
    const { data: session } = useSession()
    const [open , setOpen]= useState(false)
    let page;
    if (session?.user) {
        if (section === "profile") page = <Profile />
        else if (section === "security") page = <Security />
        else if (section === "other") page = <Other />
        else if (section === "courses") page = <Courses />
        else if (section === "videos") page = <Video />
        else if (section === "books") page = <Books />
        else if (section === "status") page = <Status />
        else if (section === "support") page = <Support />
        else if (section === "more") page = <More />
    } else {
        page = <div>Not authorized</div>
    }

    return (
        <div className={"absolute w-full h-fit min-h-screen flex justify-end"}>
            <Dashboard setOpenA={setOpen} open={open}/>
            <DashboardNavhandle setOpenA={setOpen} open={open}/>
            <div className={`${session?.user?"":"w-full md:w-full"} md:w-8/10 h-full flex justify-center overflow-y-scroll`}>
                <div className={`md:w-9/10 w-full flex min-w-screen md:min-w-fit h-screen md:relative justify-center items-center overflow-y-scroll scrollbar-hide ${session?.user ? "pt-20" : "w-full md:w-full top-0 h-full"}`}>
                    {page}
                </div>
            </div>
        </div>
    )
}
