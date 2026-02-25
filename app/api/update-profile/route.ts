import mongoose from "mongoose";
import {NextRequest, NextResponse} from "next/server";
import {getSession} from "@/lib/(auth)/auth";
import {redirect} from "next/navigation";

await mongoose.connect(process.env.MONGODB_URI!)
export async function POST(request:NextRequest){
    const  session =await getSession()
    if(!session?.user){
        redirect("/auth/signin")
    }

    const data = await  request.json()
    await mongoose.connection.db!.collection('user').updateOne(
        { _id: new mongoose.Types.ObjectId(session.user.id) },
        { $set:  data }
    )
    return NextResponse.json({ success: true })
}