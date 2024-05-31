/* eslint-disable @next/next/no-img-element */
import Banner from "#/components/Banner";
import Footer from "#/components/Footer";
import Header from "#/components/Header";
import Information from "#/components/Information";
import PersonalProjects from "#/components/PersonalProjects";
import RecentPosts from "#/components/RecentPosts";
import TechnicalSkills from "#/components/TechnicalSkills";
import { getAllPostsMeta } from "#/lib/mdx";
import Head from "next/head";

export default async function Page() {
  const posts = await getAllPostsMeta();

  return (
    <div>
      <Head>
        <title>quochuydev</title>
        <meta name="description" content="quochuydev" />
        <link rel="icon" href="/code.png" />
      </Head>

      <Header />

      <section className="mx-auto max-w-4xl">
        <div className="container">
          <Banner />

          <Information />

          <TechnicalSkills />

          <PersonalProjects />

          <div className="mt-10 text-l font-bold">
            <h2>{`I'm looking for a partime/freelance job:`}</h2>
          </div>

          <div className="flex">
            <a
              href="mailto:quochuy.dev@gmail.com"
              className="bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {"Contact me: quochuy.dev@gmail.com"}
            </a>
          </div>

          <RecentPosts posts={posts} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
