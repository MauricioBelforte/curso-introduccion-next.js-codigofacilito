import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const root = process.cwd();

export async function getFiles(type) {
  console.log("Leyendo archivos del tipo:", type);
  return fs.readdirSync(path.join(root, 'data', type));
}

export async function getFileBySlug(type, slug) {
  console.log("Leyendo archivo con slug:", slug);
  const source = fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8');
  console.log("Contenido del archivo:", source);
  const { data, content } = matter(source);
  const mdxSource = await serialize(content);
  console.log("Data:", data);
  console.log("Contenido MDX:", content);

  return {
    mdxSource,
    frontMatter: data,
  };
}

// Prueba la función directamente
(async () => {
  const post = await getFileBySlug('posts', 'hello-world');
  console.log("Post procesado:", post);
})();
