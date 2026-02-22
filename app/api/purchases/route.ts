import { NextRequest, NextResponse } from 'next/server'
import Purchase from '@/models/Purchase'
import mongoose from 'mongoose'
import { getSession } from '@/lib/(auth)/auth'

await mongoose.connect(process.env.MONGODB_URI!)

export async function POST(request: NextRequest) {
    const session = await getSession()

    if (!session?.user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { productId, price } = await request.json()

    console.log('Received:', { productId, price })
    const existing = await Purchase.findOne({
        user: session.user.id,
        products: productId
    })

    if (existing) {
        return NextResponse.json({ error: 'Already purchased' }, { status: 400 })
    }


    const purchase = await Purchase.create({
        user: session.user.id,
        products: productId,
        price
    })

    return NextResponse.json(purchase)
}
