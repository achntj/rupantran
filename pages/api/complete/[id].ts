import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// PUT /api/complete/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = req.query.id;
  const isComplete = req.body;

  const post = await prisma.post.update({
    where: { id: Number(postId) },
    data: {
      complete: !isComplete,
    },
  });
  res.json(post);
}
