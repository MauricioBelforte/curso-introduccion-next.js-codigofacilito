
dentro de la carpeta blog creamos un archivo llamado [slug].tsx

El uso de [slug].tsx en Next.js es una convención para crear rutas dinámicas.


# Rutas Dinámicas en Next.js

En Next.js, puedes crear rutas dinámicas utilizando corchetes (`[]`). Esto permite definir rutas que pueden aceptar parámetros variables. Por ejemplo, si tienes un archivo llamado `[slug].tsx`, significa que esa página puede aceptar cualquier valor como `slug` en la URL.

## Ejemplo:

### Archivo `[slug].tsx`:

Este archivo puede manejar URLs como `/post/hello-world`, `/post/nextjs-is-awesome`, etc.

## Componente de Página Dinámica:

Dentro de `[slug].tsx`, puedes usar el parámetro `slug` para cargar contenido dinámico basado en el valor de `slug`.

## Cómo Funciona

### Definición del Archivo:

Crea un archivo llamado `[slug].tsx` dentro de la carpeta `pages` o `app` (dependiendo de la versión de Next.js que estés usando).

### Uso de `getStaticPaths` y `getStaticProps`:

- Utiliza `getStaticPaths` para definir las rutas estáticas que Next.js debe generar en tiempo de compilación.
- Utiliza `getStaticProps` para obtener los datos necesarios para cada ruta.




# Rutas Dinámicas en Next.js

Next.js permite crear rutas dinámicas utilizando corchetes (`[]`). Esto es útil cuando necesitas manejar rutas que dependen de parámetros variables, como identificadores de artículos, nombres de usuarios, etc.

## Ejemplo de Ruta Dinámica

Supongamos que deseas crear una página que muestre un artículo basado en su `slug`. Aquí te mostramos cómo hacerlo:

### Crear el Archivo de Ruta Dinámica

Crea un archivo llamado `[slug].tsx` dentro de la carpeta `pages` o `app` (dependiendo de la versión de Next.js que estés usando).

```tsx
// pages/[slug].tsx o app/[slug]/page.tsx (para versiones más recientes de Next.js)
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { getFileBySlug, getFiles } from '../lib/mdx'; // Asegúrate de ajustar la ruta según tu proyecto

interface Props {
  mdxSource: any;
  frontMatter: any;
}

const PostPage: NextPage<Props> = ({ mdxSource, frontMatter }) => {
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...mdxSource} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('posts');
  const paths = posts.map((post) => ({
    params: { slug: post.replace(/\.mdx$/, '') },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { mdxSource, frontMatter } = await getFileBySlug('posts', params?.slug as string);
  return { props: { mdxSource, frontMatter } };
};

export default PostPage;


Ingresamos en el navegador 

http://localhost:3000/blog/hello-world