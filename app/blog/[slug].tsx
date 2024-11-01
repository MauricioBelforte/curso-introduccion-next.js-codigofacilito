import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "../../components/MDXComponents";
import { getFiles, getFileBySlug } from "../../lib/mdx.mjs";

interface Props {
  mdxSource: any;
  frontMatter: any;
}

const DynamicPost: NextPage<Props> = ({ mdxSource, frontMatter }) => {
  console.log("DynamicPost Props:", mdxSource, frontMatter);
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles("posts");
  console.log("Posts:", posts);
  const paths = posts.map((post) => ({
    params: { slug: post.replace(/\.mdx$/, "") },
  }));
  console.log("Paths:", paths);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log("Params:", params);
  const post = await getFileBySlug("posts", String(params?.slug));
  console.log("Post Data:", post);
  return { props: { ...post } };
};

export default DynamicPost;
