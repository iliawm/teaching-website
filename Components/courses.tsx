"use client"
import Link from "next/link";
import {useEffect, useState} from "react";
import Image from "next/image";
import Product from "@/models/product";

export type Product = {
    _id: string
    title: string
    description: string
    image: string
    price: number
    Category: string[]
}


export default function Courses() {
    const [courses, setCourses] = useState<Product[]>([])

    useEffect(() => {
        fetch('/api/purchases')
            .then(r => r.json())
            .then(data => {
                setCourses(data)
            })
    }, [])

    return (
        <div className={"w-full h-full p-10 flex flex-col items-center"}>
            <div className={"h-1/10 w-full text-4xl mb-15"}>
                My Courses
            </div>
            <div className={"courses flex flex-wrap justify-start items-start w-full h-full gap-x-15 gap-y-20 overflow-y-scroll pr-5"}>
                {courses.map((product) => (
                    <Link key={product._id} href={`/products/${product._id}`} className={"card w-95 h-80 border border-gray-300 rounded-lg shadow-md shadow-grey-300 flex-col items-center justify-start flex pb-2 p-5 hover:opacity-90"}>
                        <Image src={product.image} alt={product.title} width={200} height={150} className={"w-9/10 h-6/10 rounded-lg mb-3 object-cover"} />
                        <div className={"w-full h-4/10 flex flex-col items-start "}>
                            <div className="title w-full text-xl opacity-60">{product.title}</div>
                            <div className="title w-full text-md opacity-40">{product.description}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
