"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function PurchaseButton({productId, price}: { productId: string, price: number }) {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handlePurchase = async () => {
        setLoading(true)
        const res = await fetch('/api/purchases', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId, price })
        })
        const data = await res.json()

        if (data.error) {
            alert(data.error)
            setLoading(false)
        } else {
            alert('Purchase successful!')
            router.refresh() 
        }
    }

    return (
        <button type={"submit"} className={"w-full h-20 bg-indigo-600 text-2xl text-center text-white rounded-2xl hover:opacity-90 cursor-pointer"} onClick={handlePurchase} disabled={loading}>
            {loading ? 'در حال پردازش...' : 'پرداخت'}
        </button>
    )
}
