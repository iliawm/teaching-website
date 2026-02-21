import { NextRequest, NextResponse } from 'next/server'
import Product from '@/models/product'
import mongoose from 'mongoose'
import {getSession} from "@/lib/(auth)/auth";

await mongoose.connect(process.env.MONGODB_URI!)

export default async function Home() {
    await mongoose.connect(process.env.MONGODB_URI!)
    const products = await Product.find().lean()


    export async function POST(request: NextRequest) {
    const session = await getSession()
    if (!session?.user || session.user.email !== 'iliabayat83@gmail.com') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const body = await request.json()
    const product = await Product.create(body)
    return NextResponse.json(product)
}
