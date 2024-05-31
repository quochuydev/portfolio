/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import Header from "#/components/Header";
import Footer from "#/components/Footer";

export default function Page() {
  return (
    <div>
      <Head>
        <title>quochuydev</title>
        <meta name="description" content="quochuydev" />
        <link rel="icon" href="/code.png" />
      </Head>

      <Header />

      <section className="mx-auto max-w-4xl">
        <div className="container">{/*  */}</div>
      </section>

      <Footer />
    </div>
  );
}
