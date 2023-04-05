/* eslint-disable @next/next/no-img-element */
import React from "react";

export type Post = {
  slug: string;
  image: string;
  title: string;
  description: string;
};

export type RecentPostsProps = {
  posts: Post[];
};

export default function RecentPosts(props: RecentPostsProps) {
  const { posts } = props;

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold">Recent Posts</h2>

      <div className="grid grid-cols-2 sm:gap-10">
        {posts.map((post: any, i: number) => (
          <div className="mt-4" key={i}>
            <a href={`posts/${post.slug}`} className="group">
              <img
                src={post.image}
                alt={post.title}
                style={{ maxHeight: 250 }}
              />
              <h2 className="font-bold group-hover:text-blue-500 text-xl">
                {post.title}
              </h2>
              <p className="text-gray-800">{post.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
