import fs from "fs";
import glob from "glob";
import path from "path";
import matter from "gray-matter";

const ROOT_PATH = process.cwd();
export const POSTS_PATH = path.join(ROOT_PATH, "posts");

export const getAllPostsMeta = () => {
  const PATH = path.join(POSTS_PATH);
  const paths = glob.sync(`${PATH}/**/*.mdx`);

  return paths.map((filePath: any): any => {
    const source = fs.readFileSync(path.join(filePath), "utf8");
    const slug = path.basename(filePath).replace(".mdx", "");
    const { data } = matter(source);
    return { ...data, slug };
  });
};
