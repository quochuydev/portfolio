/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import Header from "#/components/Header";
import Footer from "#/components/Footer";
import { getPost } from "#/lib/mdx";
import { CustomMDX } from "#/components/Mdx";

export default async function Page({ params: { slug } }: any) {
  const post = await getPost(slug);
  console.log(`debug:post`, post);

  return (
    <div>
      <Head>
        <title>quochuydev</title>
        <meta name="description" content="quochuydev" />
        <link rel="icon" href="/code.png" />
      </Head>

      <Header />

      <section className="mx-auto max-w-4xl">
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </section>

      <Footer />
    </div>
  );
}
