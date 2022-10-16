import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'
import {inDevEnvironment} from '../../../lib/DevEnv';


// DELETE /api/post/:id
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const postId = req.query.id;

  if (req.method === "DELETE" && inDevEnvironment) {

      const post = await prisma.post.delete({
        where: { id: Number(postId) },
      });
      res.json(post);

  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
