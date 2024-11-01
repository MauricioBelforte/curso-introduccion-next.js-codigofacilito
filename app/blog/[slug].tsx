import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "../../components/MDXComponents";
import { getFiles, getFileBySlug } from "../../lib/mdx.mjs";

interface Props {
  mdxSource: any;
  frontMatter: any;
}

const DynamicPost: NextPage<Props> = ({ mdxSource, frontMatter }) => {
  console.log("DynamicPost Props:", { mdxSource, frontMatter });
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles("posts"); // Esta línea lee todos los archivos .mdx en la carpeta posts
  console.log("Posts:", posts); // Esta línea debería mostrar los nombres de los archivos .mdx

  const paths = posts.map((post) => ({
    params: { slug: post.replace(/\.mdx$/, "") }, // Esto crea una lista de rutas basadas en los nombres de los archivos
  }));
  console.log("Paths:", paths); // Esta línea debería mostrar la lista de rutas generadas

  return { paths, fallback: false }; // Esta línea retorna las rutas generadas
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log("Params:", params); // Esta línea debería mostrar los parámetros recibidos (es decir, el slug)

  const post = await getFileBySlug("posts", String(params?.slug)); // Esta línea obtiene los datos del archivo .mdx basado en el slug
  console.log("Post Data:", post); // Esta línea debería mostrar los datos obtenidos del archivo .mdx

  return { props: { ...post } }; // Esta línea retorna los datos obtenidos como props
};


export default DynamicPost;
