import { NextRequest, NextResponse } from 'next/server'
import Product from '@/models/product'
import mongoose from 'mongoose'

await mongoose.connect(process.env.MONGODB_URI!)

export async function GET() {
    const products = await Product.find()
    return NextResponse.json(products)
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    const product = await Product.create(body)
    return NextResponse.json(product)
}
