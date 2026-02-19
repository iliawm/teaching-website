import {Profile} from "@/Components/Profile";
import {Courses} from "@/Components/courses";
import {Video} from "@/Components/Video";
import {Books} from "@/Components/Books";
import {Status} from "@/Components/status";
import Security from "@/Components/security";
import Other from "@/Components/Other";
import {Support} from "@/Components/Support";
import {More} from "@/Components/More";
import {getSession} from "@/lib/(auth)/auth";

import DashboardNavhandle from "@/Components/DashboardNavhandle";


export default async function Users({ searchParams }: { params: Promise<{ id: string }>,
    searchParams : Promise<{ section? : string}>}) {
    const  session =await getSession()
    console.log(await searchParams)
    const {section} = await searchParams
    let page;
if (session?.user){
    if (section === "profile") {
        page = <Profile />
    }
        else if (section === "security") {
            page = <Security />
    }
    else if (section === "other") {
        page = <Other />
    }
    else if (section === "courses") {
        page = <Courses />
    }
    else if (section === "videos") {
        page = <Video />
    }
    else if (section === "books") {
        page = <Books />
    }
    else if (section === "status") {
        page = <Status />
    }
    else if (section === "support") {
        page = <Support />
    }
    else if (section === "more") {
        page = <More />
    }
    else if(section === "closed"){
        page = " "
    }
}
else{
    page = <div>Not authorized</div>
    
}
    return (
        <div className={"absolute w-full h-fit min-h-screen flex justify-end "}>

                <DashboardNavhandle/>

            <div className={`${session?.user?"":"w-full md:w-full"} md:w-8/10 h-full flex justify-center overflow-y-scroll`}>
                <div className={`md:w-9/10 w-full flex min-w-screen md:min-w-fit h-screen  md:relative  justify-center items-center overflow-y-scroll scrollbar-hide ${session?.user ? "pt-20 " : "w-full md:w-full top-0 h-full"} `}>
                    { page }
                </div>
            </div>
        </div>
    )
}
