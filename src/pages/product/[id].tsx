import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/products"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Product() {
    const {query} = useRouter()
    return (
       <ProductContainer>
        <ImageContainer >
       
        </ImageContainer>
        <ProductDetails>
      
            <h1> Camisa X</h1>
            <span>R$: 79.90</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quo eaque, reprehenderit, accusamus quam tenetur ipsam quisquam hic sequi at eveniet. Ullam aperiam officiis vel maiores odio illum cumque expedita?</p>
            <button>
                Comprar agora!
            </button>
        </ProductDetails>
       </ProductContainer>
    )
}