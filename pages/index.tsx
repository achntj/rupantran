import React, { useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import { NextPage } from "next";
import absoluteUrl from "next-absolute-url";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Draft: NextPage = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [disable, setDisable] = useState(false);

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setDisable(true);
    try {
      const body = { title, author, content };
      await fetch(`${origin}/api/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/feedbacks");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div>
        <form onSubmit={submitData}>
          <h1>Rupantran</h1>
          <p>
            Express your concerns, we'll get it delivered to the authorities.
          </p>
          <h3>Feedback</h3>
          <div className="mb-5">
            <a>
              <button disabled={disable} type="submit">
                Publish
              </button>
            </a>
          </div>
          <div>
            <input
              autoFocus
              required
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              type="text"
              value={title}
              className="w-full outline-none bg-transparent text-3xl font-bold"
            />
            <input
              autoFocus
              required
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="name"
              type="text"
              value={author}
              className="w-full outline-none bg-transparent text-sm"
            />

            <textarea
              required
              cols={50}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content (MarkDown supported)"
              rows={8}
              value={content}
              className="w-full outline-none h-auto resize-none bg-transparent"
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

Draft.getInitialProps = async (context) => {
  const { req } = context;
  // Hostname is needed on both front and back so we should
  // post it to the frontend by returning it from getInitialProps
  const origin = absoluteUrl(req).origin;
  return {
    origin,
  };
};

export default Draft;
