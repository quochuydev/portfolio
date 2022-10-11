/* eslint-disable @next/next/no-img-element */
import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import prisma from "../lib/prisma";
import { getAllPostsMeta } from "../lib/mdx";

export async function getStaticProps() {
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
            <a href="#" className="uppercase font-bold">
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
                <h1 className="text-2xl font-bold">{`Hi there, I'm Huy Pham`}</h1>

                <div className="text-gray-800">
                  <p>
                    Learning new languages and technologies is what I am
                    passionate about.
                  </p>
                  <p>------</p>
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
                src={"./avatar.jpg"}
                alt="avatar"
              />
            </div>
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-bold">Information</h2>

            <div className="flex">
              <div className="w-full">
                <p>
                  Birthday: <span className="font-bold">April 05, 1998</span>
                </p>
                <p>
                  Location:{" "}
                  <span className="font-bold">Ho Chi Minh city, Vietnam</span>
                </p>
                <p>
                  Study/Degree:{" "}
                  <span className="font-bold">
                    Vocation training college - 3.74/4
                  </span>
                </p>
              </div>
              <div className="w-full">
                <p>
                  Mail: <span className="font-bold">quochuy.dev@gmail.com</span>
                </p>
                <p>
                  Skype: <span className="font-bold">quochuy.dev</span>
                </p>
                <p>
                  Github:{" "}
                  <a className="font-bold" href="https://github.com/quochuydev">
                    https://github.com/quochuydev
                  </a>
                </p>
                <p>
                  Linkedin:{" "}
                  <a
                    className="font-bold"
                    href="https://www.linkedin.com/in/quochuydev/"
                  >
                    https://www.linkedin.com/in/quochuydev/
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* 
          <div>
            <button className="mt-10 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Download CV
            </button>
          </div> */}

          <div className="mt-14">
            <h2 className="text-2xl font-bold">Technical skills</h2>

            <table>
              <tr>
                <td>
                  <p>Programming languages</p>
                </td>
                <td>
                  <p className="font-bold">
                    JavaScript, NodeJS, ReactJS, Typescript{" "}
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Database, Storage, Broker</p>
                </td>
                <td>
                  <p className="font-bold">
                    MongoDB, MySQL, PostgreSQL, Elastic Search, RabbitMQ, NATs{" "}
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Framework/Libraries/Platform </p>
                </td>
                <td>
                  <p className="font-bold">
                    Express.JS, Nest.JS, Redux, Jest, Playwright{" "}
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Server/DevOps/Cloud</p>
                </td>
                <td>
                  <p className="font-bold">
                    Linux, Docker, Google Cloud Platform
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>{`Methodologies & Tools`}</p>
                </td>
                <td>
                  <p className="font-bold">
                    Git, Github, Gitlab, VSCode, Offices, Miro{" "}
                  </p>
                </td>
              </tr>
            </table>
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-bold">Recent Posts</h2>

            <div className="grid grid-cols-2 sm:gap-10">
              {posts.map((e: any, i: number) => (
                <div className="mt-4" key={i}>
                  <a href={`posts/${e.slug}`} className="group">
                    <img
                      src={e.image}
                      alt={e.title}
                      style={{
                        maxHeight: 250,
                      }}
                    />
                    <h2 className="font-bold group-hover:text-blue-500 text-xl">
                      {e.title}
                    </h2>
                    <p className="text-gray-800">{e.description}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-4xl mt-16">
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
