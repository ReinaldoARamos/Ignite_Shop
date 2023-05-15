import { Empty } from "@/src/styles/components/EmptyCart"
import Image from 'next/image'
import emptyCart from '../../assets/emptyCart.png'
import { ShoppingBag, ShoppingCart } from "phosphor-react"
import Link from "next/link"
import { MiniEmpty } from "@/src/styles/components/MiniEmptyCart"
export  default function MiniEmptyCart() {
    return (
        <MiniEmpty>
           <ShoppingBag size={200} />
            <p>
                Seu carrinho está vazio! 
            </p>

            
        </MiniEmpty>
    )
}