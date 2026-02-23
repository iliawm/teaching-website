import Image from "next/image";
import mongoose from "mongoose";
import ProductModel from "@/models/product";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import {IoHome} from "react-icons/io5";
import PurchaseButton from "@/Components/PurchaseButton";

import {getSession} from "@/lib/(auth)/auth";
import Purchase from "@/models/Purchase";

export default async function ProductPage ({ params }: { params: Promise<{ id: string }> }) {
    await mongoose.connect(process.env.MONGODB_URI!)
    const { id }= await params
    const session = await getSession()
    const products = await ProductModel.findById( id ).lean()
    const hasPurchased = session?.user?await Purchase.findOne({
        user: session.user.id,
        products: id }).lean() : false
    return (
        <div className={"w-full bg-gray-200 min-h-screen flex text-center justify-center items-center h-fit md:h-full p-5 mt-10"}>
            <Link href={"/"} className={"rounded-2xl bg-indigo-600 w-14 h-14 top-0 right-0 mt-4 mr-5 fixed text-2xl text-white font-semibold flex items-center justify-center"}><IoHome /></Link>
            <div className={"h-fit  w-full  bg-white  rounded-3xl flex  overflow-x-hidden overflow-y-hidden  scrollbar-hide flex-col md:flex-row gap-6 p-3 md:pb-30"}>
                <div className="h-fit">
                <Image src={products?.image || "/temp.png"} width={1800} height={1800} alt={products?.title || "product"} className={"rounded-3xl  w-full md:h-125 object-cover"}/>
                </div>
                
                <div className="flex-col gap-2 flex md:w-full ">
                <div className={"flex flex-col  items-end gap-3 "}>
                <h1 className={"font-bold text-2xl text-end text-indigo-500"}> {products?.title}</h1>
                    <div className={"font-semibold text-lg text-end text-black/60"}> {products?.description}</div>
                </div>

                <div className={"flex flex-col items-start gap-3 "}>
                <h1 className={"font-semibold text-2xl text-end text-black/60"}>قیمت</h1>
                    <div className={"font-semibold text-lg text-end text-indigo-500"}> {products?.price}</div>
                </div>
                <div className={"flex  items-center gap-2 "}>
                    <h1 className={"font-semibold text-2xl text-end text-yellow-500"}><FaStar /></h1>
                    <div className={"font-semibold text-xl text-end text-indigo-500"}>2/5 (static)</div>
                </div>
                <div className={"flex flex-col  gap-2 "}>
                    <h1 className={"font-semibold text-2xl text-end text-yellow-500"}>دسته بندی</h1>
                    {products?.Category.map((item: string, index: number) => (
                        <div key={index} className={"font-semibold text-xl text-start text-indigo-500 bg-gray-300 w-fit rounded-lg p-2 "}>
                            {item}
                        </div>
                    ))}
                    </div>
                    {hasPurchased ?
                        
                        <Link href={"/dashboard?section=courses"}  className={"w-full flex  h-20 bg-indigo-600 text-2xl text-center text-white text-bold rounded-2xl  hover:opacity-90 cursor-pointer items-center justify-center md:top-50 relative"}>
                            داشبورد 
                        </Link>
                        :
                    <div className={"w-full h-full flex items-end"}>
                        <PurchaseButton productId={id} price={products?.price} />
                    </div>}
                </div>
            </div>
        </div>
    )
}