import { stripe } from "@/src/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export default async function handler(req: NextApiRequest, res: NextApiResponse)  {
  const sucessUrl = `${process.env.NEXT_URL}/sucess`
  const cancelUrl = `${process.env.NEXT_URL}/cancel`
  const priceId = ''
  const checkoutsession = await stripe.checkout.create({
    cancel_url: '',
    sucess_url: '',
    mode: 'payment',
    lineItems: [
      {
        price: priceId,
        quantity: 1
      }
    ]
  })
};
