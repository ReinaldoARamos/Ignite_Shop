import { Empty } from "@/src/styles/components/EmptyCart"
import Image from 'next/image'
import emptyCart from '../../assets/emptyCart.png'
import { ShoppingBag, ShoppingCart } from "phosphor-react"
import Link from "next/link"
export  default function EmptyCart() {
    return (
        <Empty>
           <ShoppingBag size={400} />
            <p>
                Seu carrinho está vazio! 
            </p>

            <Link href={'/'}>Voltar ao catálogo</Link>
        </Empty>
    )
}