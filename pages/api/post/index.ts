import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, author, content } = req.body;

  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: author,
    },
  });
  res.json(result);
}
