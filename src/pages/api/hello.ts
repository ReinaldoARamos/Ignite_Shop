import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export default function handler(req: NextApiRequest, res: NextApiResponse)  {
  return res.json({ message: 'hello'})
};
