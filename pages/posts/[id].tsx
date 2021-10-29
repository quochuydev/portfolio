import React from "react";
import type { NextPage } from "next";

export async function getServerSideProps({ query }: any) {
  return {
    props: {
      post: query.id,
    },
  };
}

const Post: NextPage = ({ post }: any) => {
  return <div>TODO: {JSON.stringify(post)}</div>;
};

export default Post;
