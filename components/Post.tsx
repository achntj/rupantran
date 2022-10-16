import React, { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { MailIcon, MailOpenIcon } from "@heroicons/react/outline";

export type PostProps = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: Date;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  return (
    <div>
      <p className="m-0 text-2xl font-medium flex items-center gap-4 justify-between">
        {post.title} | ~{post.author}
      </p>
      <div className="entry break-words">
        <ReactMarkdown children={post.content} />
      </div>
    </div>
  );
};

export default Post;
