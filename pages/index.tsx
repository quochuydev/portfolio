import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import prisma from "../lib/prisma";
import { getAllPostsMeta } from "../lib/mdx";

export async function getStaticProps() {
  // @ts-ignore
  const post = await prisma.post.create({
    data: {
      slug: "post",
      title: "post",
      body: "post",
    },
  });
  console.log(post);

  // @ts-ignore
  // const posts = await prisma.post.findMany();
  const posts = getAllPostsMeta();
  return { props: { posts } };
}

const Home: NextPage = ({ posts }: any) => {
  return (
    <div>
      <Head>
        <title>quochuydev</title>
        <meta name="description" content="quochuydev" />
        <link rel="icon" href="/code.png" />
      </Head>

      <header className="mx-auto max-w-4xl">
        <div className="sticky py-6 mb-6">
          <div className="container flex justify-between">
            <a href="#" className="uppercase">
              quochuydev
            </a>
            <div className="flex space-x-4">
              <a href="#about">About</a>
              <a href="#blog">Blog</a>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-4xl">
        <div className="container">
          <div className="flex flex-wrap items-center">
            {/*  */}
            <div className="w-full md:w-1/2 lg:w-3/5 md:h-128">
              <div className="max-w-md">
                <h1 className="text-4xl font-bold">Hi there, I'm Huy</h1>
                <div className="text-gray-800">
                  <p>
                    Learning new languages and technologies is what I am
                    passionate about.
                  </p>
                  <p>
                    With passion in learning language and having a good software
                    knowledge, I want to become a Senior Software Engineer.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:h-64 md:w-1/2 lg:w-2/5">
              <img
                className="h-full w-full md:w-auto object-cover float-right"
                src="./avatar.jpg"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold">Recent Posts</h2>
          <div className="grid grid-cols-2 sm:gap-10">
            {posts.map((e: any, i: number) => (
              <div className="mt-10" key={i}>
                <a href={`posts/${e.slug}`} className="group">
                  <img src={e.image} />
                  <h2 className="font-bold group-hover:text-blue-500">
                    {e.title}
                  </h2>
                  <p className="text-gray-800">{e.description}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-4xl mt-4">
        <div className="container flex justify-between">
          <p>Built with Next.js, Tailwind, Prisma</p>
          <div className="flex space-x-4">
            <a href="https://github.com/quochuydev">Github</a>
            <a href="https://www.instagram.com/huyphamdev/">Instagram</a>
            <a href="https://www.linkedin.com/in/quochuydev/">Linkedin</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
