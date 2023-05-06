import { stripe } from "@/src/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const priceId = 'price_1N1bJ4AWPPVVTfNW84mYJYag';
  const successUrl =  `${process.env.NEXT_URL}/sucess` 
  const cancelUrl = `${process.env.NEXT_URL}/cancel`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "subscription",

    line_items: [
      { 
        price: priceId,
       quantity: 1 }],
       
  });

  /*
  const checkoutSession = await stripe.checkout.session.create({
    cancel_url: cancelUrl,
    sucess_url: sucessUrl,
    mode: 'payment',
    lineItems: [
      {
        price: priceId,
        quantity: 1
      }
    ]
  })
*/
  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
