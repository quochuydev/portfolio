import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const { title, body }: any = req.body;
  // console.log(body);

  const result = await prisma.post.create({
    data: {
      slug: "body",
      title: "body",
      body: "body",
    },
  });
  res.json(result);
}
