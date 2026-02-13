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


export default async function Users({ params,searchParams }: { params: Promise<{ id: string }>,
    searchParams : Promise<{ section? : string}>}) {
    const  session =await getSession()
    
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
}
else{
    page = <div>Not authorized</div>
    
}
    return (
        <div className={"absolute w-full h-full bg-gray-200 flex justify-end "}>
            <div className={`${session?.user?"":"w-full md:w-full"} md:w-8/10 h-full flex justify-center overflow-y-scroll`}>
                <div className={`md:w-9/10 h-full flex   relative bg-gray-200 justify-center items-center ${session?.user ? "top-20 " : "w-full md:w-full top-0 h-full"} `}>

                    { page }
                </div>
            </div>
        </div>
    )
}
