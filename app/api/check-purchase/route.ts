import {NextRequest, NextResponse} from 'next/server'
import Purchase from '@/models/Purchase'
import { getSession } from '@/lib/(auth)/auth'


export async function GET(request: NextRequest) {
    const session = await getSession()
    const { searchParams } = new URL(request.url)
    const productId = searchParams.get('productId')
    const hasPurchased = await Purchase.findOne({
        user: session!.user.id,
        product: productId
    })
    return NextResponse.json({ hasPurchased: !!hasPurchased })
}