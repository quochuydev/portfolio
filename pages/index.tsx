import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import prisma from "../lib/prisma";
import { getAllPostsMeta } from "../lib/mdx";

export async function getStaticProps() {
  // @ts-ignore
  // const posts = await prisma.post.findMany();

  const posts = getAllPostsMeta();
  return { props: { posts } };
}

const Home: NextPage = ({ posts }: any) => {
  return (
    <div>
      {/* {JSON.stringify(posts)} */}
      <Head>
        <title>quochuydev</title>
        <meta name="description" content="quochuydev" />
        <link rel="icon" href="/code.png" />
      </Head>

      <div className="sticky py-6 mb-6">
        <div className="container flex justify-between mx-auto">
          <a href="#" className="uppercase">
            quochuydev
          </a>
          <div className="flex space-x-4">
            <a href="#about">About</a>
            <a href="#blog">Blog</a>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-4xl">
        <div className="about">
          <div className="container">
            <div className="flex">
              <div className="pr-4">
                <h1 className="text-4xl font-bold">Hi there, I'm Huy</h1>
                <div className="text-gray-800">
                  <p>Hi there, I'm Huy.</p>
                  <p>Hi there, I'm Huy.</p>
                  <p>Hi there, I'm Huy.</p>
                </div>
              </div>
              <div className="pl-4">
                <img srcSet="./avatar.jpg" width={220} />
              </div>
            </div>
          </div>
        </div>

        <div className="blog">
          <div className="container">
            <h2 className="text-2xl font-bold">Recent Posts</h2>
            {/* ----- */}
            <div className="grid grid-cols-2">
              <div>
                <a href="#">
                  <img src="#" alt="" />
                  <h2>title</h2>
                  <p>description</p>
                </a>
              </div>
              <div>
                <a href="#">
                  <img src="#" alt="" />
                  <h2>title</h2>
                  <p>description</p>
                </a>
              </div>
            </div>
            {/* ----- */}
          </div>
        </div>
      </main>

      <footer>
        <div className="sticky">
          <div className="container flex justify-between mx-auto">
            <a href="#">Built with Next.js, Tailwind, Prisma</a>
            <div className="flex space-x-4">
              <a href="#">Github</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
