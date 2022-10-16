import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <>
    <Head>
      <title>Pandora's Box</title>
      <meta
        name="description"
        content="A small space for my notes, accessible across all my devices."
      />
    </Head>
    <div className="bg-black prose prose-a:text-cyan-400 prose-headings:text-white prose-strong:text-slate-50 prose-blockquote:text-slate-400 prose-pre:bg-gray-900 prose-code:text-slate-300 prose-hr:border-zinc-700">
      <div className="max-w-[750px] mx-auto flex flex-col min-h-screen">
        <Header />
        <div className="px-4 flex-grow p-10 text-slate-200">
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  </>
);

export default Layout;
