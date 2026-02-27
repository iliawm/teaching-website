import mongoose from "mongoose";
import ProductModel from "@/models/product";
import {Product} from "@/app/(main)/page";
import Link from "next/link";
import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-card";
import Image from "next/image";
import {MdArrowForwardIos} from "react-icons/md";
import Navbar from "@/Components/Navbar";
import {useSearchParams} from "next/navigation";


export default async function Products(){
    await mongoose.connect(process.env.MONGODB_URI!)

    const products = await ProductModel.find().lean()
    return(
        <div className={"w-full min-h-screen  p-3 md:p-10 bg-gray-200"}>
            <div className={"w-full h-full min-h-screen bg-[snow] rounded-3xl border-b "}>
                <Navbar/>
                <div className={"w-full h-fit p-10 overflow-y-scroll flex flex-wrap gap-10 pb-30 overflow-x-hidden items-center scrollbar-hide "}>
                
                {products.map((e:Product)=>{
                    return (
                        <Link key={e._id} href={`/products/${e._id}`} className={"w-75 h-fit shadow-2xl shadow-gray-400 rounded-2xl min-w-45 shrink-0"}>
                            <CardContainer className="w-full h-full " containerClassName="py-0">
                                <CardBody className="bg-white relative group/card hover:shadow-2xl hover:shadow-emerald-500/10 dark:bg-black dark:border-white/20 border-black/10 w-full h-full rounded-xl p-6 border">
                                    <CardItem translateZ="100" className="w-full h-full">
                                        <Image
                                            src={e.image || "/temp.png"}
                                            height={1000}
                                            width={1000}
                                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                            alt="product"
                                        />
                                    </CardItem>
                                    <CardItem translateZ="50" className="text-xl font-bold text-neutral-800 dark:text-white mt-4">
                                        {e.title}
                                    </CardItem>
                                    <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm mt-2 dark:text-neutral-300">
                                        {e.description}
                                    </CardItem>
                                    <div className="flex items-center mt-6 justify-end">
                                        <CardItem translateZ={20} className="px-6 py-2 rounded-xl bg-indigo-400 dark:bg-white dark:text-black text-white text-sm font-bold">
                                            <MdArrowForwardIos />
                                        </CardItem>
                                    </div>
                                </CardBody>
                            </CardContainer>
                        </Link>

                    )
                })}
            </div>
        </div>
            </div>
    )
}