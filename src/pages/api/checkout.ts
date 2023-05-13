import { stripe } from "@/src/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

import { ProductsProps } from "@/src/context/context";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { products } = req.body as { products: ProductsProps[] };


  if(req.method != 'POST') {
    return res.status(405).json({
      error: "Method Not Allowed"
    })
  }
  
  if(!products){
    return res.status(400).json({
          error: "Price not found!"
        })
  }
  const successUrl = `${process.env.NEXT_URL}/sucess/?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/cancel`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "payment",

    line_items: 
      products.map((product) => ({
        price: product.defaultPriceId,
        quantity: 1,
      })),

    
  });
  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
