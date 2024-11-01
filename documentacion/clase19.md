Clase 19

Configurando la librería de MDX

Creamos una carpeta en la raiz del proyecto con nombre lib y dentro creamos un archivo con nombre mdx.js

Por ahora no vamos usar Typescript


# Explicación del Código

Este código está diseñado para manejar archivos MDX en un proyecto Next.js, proporcionando funciones para leer y procesar contenido Markdown con metadatos.

## Importación de Módulos

```javascript
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";
import mdxPrism from "mdx-prism";
```

### Descripción de los Módulos

- **`fs`**: Módulo del sistema de archivos de Node.js para trabajar con el sistema de archivos.
- **`gray-matter`**: Biblioteca para analizar el front-matter de archivos Markdown. El front-matter es una sección al comienzo del archivo que contiene metadatos.
- **`path`**: Módulo de Node.js para manejar y transformar rutas de archivos y directorios.
- **`readingTime`**: Biblioteca para calcular el tiempo estimado de lectura de un contenido.
- **`next-mdx-remote/serialize`**: Función para serializar contenido MDX para su renderización en aplicaciones Next.js.
- **`mdxPrism`**: Proporciona resaltado de sintaxis para el código en los archivos MDX utilizando Prism.js.

## Definición de la Ruta Base

```javascript
const root = process.cwd();
```

- **`root`**: Establece la ruta base del proyecto utilizando el directorio de trabajo actual (`process.cwd()`).

## Función para Obtener Archivos

```javascript
export async function getFiles(type) {
  return fs.readdirSync(path.join(root, "data", type));
  //type es un string
  //fs.readdirSync va a obtener los archivos que estan en la raiz root del proyecto en la carpeta data y agregando type

}
```

### Descripción de la Función

- **`getFiles`**: Esta función es asincrónica y se exporta para ser utilizada en otras partes del proyecto. Su propósito es leer y devolver los nombres de los archivos en un directorio específico.
  - **Parámetros**:
    - `type`: Tipo de archivo o directorio que se quiere leer.
  - **Proceso**:
    - Utiliza `fs.readdirSync` para leer de manera sincrónica los nombres de los archivos en el directorio especificado.
    - Construye la ruta completa del directorio utilizando `path.join` para concatenar la ruta base (`root`), `"data"`, y el `type` proporcionado.
  - **Retorno**:
    - Devuelve un array con los nombres de los archivos en el directorio especificado.

Este código es una parte esencial de un proyecto que utiliza MDX en Next.js, proporcionando la funcionalidad para manejar archivos y metadatos de manera eficiente.

---





# ¿Qué es un Slug?

## Definición

Un **slug** es una parte de una URL que identifica de manera única una página en una aplicación web de una manera amigable y legible para el usuario. Los slugs son generalmente generados a partir de títulos de contenido, como artículos o publicaciones, y se utilizan para crear URLs limpias y descriptivas.

## Características de un Slug

1. **Legible por Humanos**:
   - Los slugs están diseñados para ser fáciles de leer y entender por los usuarios. Por ejemplo, un slug para una publicación titulada "Guía para MDX en Next.js" podría ser `guia-para-mdx-en-next-js`.

2. **Uso de Minúsculas y Guiones**:
   - Generalmente, los slugs se escriben en minúsculas y utilizan guiones para separar palabras. Esto asegura que sean uniformes y fáciles de manejar en los sistemas de archivos y URLs.

3. **Único**:
   - Cada slug debe ser único dentro de su contexto para evitar conflictos y asegurar que cada URL lleve a una página distinta.

## Ejemplos de Slugs

- Para una publicación titulada "Introducción a Next.js":
  - Título: Introducción a Next.js
  - Slug: `introduccion-a-next-js`

- Para una guía titulada "Cómo usar MDX en tu Proyecto":
  - Título: Cómo usar MDX en tu Proyecto
  - Slug: `como-usar-mdx-en-tu-proyecto`

## Uso en el Código

En el código, un slug se utiliza para identificar de manera única un archivo o contenido específico. Aquí hay un ejemplo de cómo se usa un slug en una función:

```javascript
export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, "data", type, `${slug}.mdx`), "utf8")
    : fs.readFileSync(path.join(root, "data", `${type}.mdx`), "utf8");

  // Procesamiento del contenido...
  return {
    mdxSource,
    frontMatter: {
      slug: slug || null,
      // Otros metadatos...
    },
  };
}
```

---
# Función para Obtener un Archivo por Slug

En este ejemplo, el slug se utiliza para construir la ruta del archivo que se quiere leer, asegurando que se accede al contenido correcto.

```javascript
export async function getFileBySlug(type, slug) {
  // type si el archivo esta dentro de una carpeta 
  // slug si el archivo esta fuera de la carpeta
  const source = slug
    ? fs.readFileSync(path.join(root, "data", type, `${slug}.mdx`), "utf8")
    : fs.readFileSync(path.join(root, "data", `${type}.mdx`), "utf8");

  const { data, content } = matter(source); // source es un markdown, y usando desestructuracion le pedimos las 2 partes del markdown, la data y el contenido
  const mdxSource = await serialize(content, {
    // Esta funcion va a serializar el contenido que sacamos de matter
    mdxOptions: {
      // Aca vamos a utilizar los plugins de remark
      remarkPlugins: [
        require("remark-slug"),
        // si o si primero el slug y despues el autolink
        [
          require("remark-autolink-headings"),
          {
            linkProperties: {
              className: ["anchor"],
            },
          },
        ],
        require("remark-code-titles"), // Esta parte es para añadir titulos
      ],
      rehypePlugins: [mdxPrism], // esto es para hacer higlighs te nuestro codigo para obtener un html
     
    },
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,  // para contar todas las palabras del archivo
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}
```

### Descripción de la Función

- **`getFileBySlug`**: Esta función es asincrónica y se exporta para ser utilizada en otras partes del proyecto. Su propósito es leer un archivo MDX por su slug y procesar su contenido y metadatos.
  - **Parámetros**:
    - `type`: Tipo de archivo o directorio que se quiere leer.
    - `slug`: Identificador único del archivo (slug).
  - **Proceso**:
    - Determina la ruta del archivo utilizando `slug` si se proporciona, o lee un archivo predeterminado si no.
    - Lee el contenido del archivo MDX utilizando `fs.readFileSync`.
    - Utiliza `gray-matter` para separar el front-matter (metadatos) y el contenido del archivo.
    - Serializa el contenido MDX utilizando `next-mdx-remote/serialize`, aplicando los plugins de remark y rehype para procesar el contenido.
  - **Retorno**:
    - Devuelve un objeto con el contenido MDX serializado (`mdxSource`) y los metadatos (`frontMatter`), incluyendo el recuento de palabras, el tiempo de lectura estimado, el slug y cualquier dato adicional.



## Función para Obtener Metadatos de Todos los Archivos

```javascript
export async function getAllFilesFrontMatter(type) { //Funcion para obtener todos los archivos
  const files = fs.readdirSync(path.join(root, "data", type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "data", type, postSlug),
      "utf8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
}
```

### Descripción de la Función

- **`getAllFilesFrontMatter`**: Esta función es asincrónica y se exporta para ser utilizada en otras partes del proyecto. Su propósito es leer todos los archivos en un directorio y devolver sus metadatos.
  - **Parámetros**:
    - `type`: Tipo de archivo o directorio que se quiere leer.
  - **Proceso**:
    - Lee los nombres de los archivos en el directorio especificado utilizando `fs.readdirSync`.
    - Utiliza `reduce` para iterar sobre cada archivo, leer su contenido, extraer los metadatos utilizando `gray-matter`, y construir un array de objetos con los metadatos de cada archivo.
  - **Retorno**:
    - Devuelve un array de objetos, cada uno conteniendo los metadatos (`data`) y el `slug` de cada archivo.

---

# Relación del Código con MDX

Este código no es exclusivo de MDX, pero está muy relacionado con su uso en aplicaciones Next.js. A continuación, se explica cómo cada parte del código se relaciona con MDX.

## Contexto de Uso

Este código utiliza varias bibliotecas y herramientas que son comunes en proyectos que manejan contenido en formato MDX dentro de aplicaciones Next.js.

## Relación con MDX

### 1. `gray-matter`

- **Función**: Esta biblioteca se utiliza para analizar el front-matter de los archivos MDX. El front-matter es la sección al inicio de un archivo MDX que contiene metadatos en formato YAML.
- **Uso en MDX**: Permite extraer metadatos como el título, la fecha, las etiquetas, etc., que son muy útiles para generar listas de contenido, como blogs o artículos.

### 2. `next-mdx-remote/serialize`

- **Función**: Esta herramienta convierte el contenido MDX a un formato que Next.js puede renderizar fácilmente.
- **Uso en MDX**: Facilita la renderización del contenido MDX en las páginas de Next.js, permitiendo la combinación de Markdown y JSX (componentes de React).

### 3. `mdxPrism`

- **Función**: Proporciona resaltado de sintaxis para bloques de código en archivos MDX usando Prism.js.
- **Uso en MDX**: Mejora la visualización del código embebido en los documentos MDX, lo cual es muy útil para la documentación técnica y blogs de programación.

### 4. `remark-slug`, `remark-autolink-headings`, `remark-code-titles`

- **Función**: Estos plugins de remark se utilizan para procesar el contenido MDX. Añaden funcionalidades adicionales como IDs únicos a los encabezados, enlaces automáticos a los encabezados y títulos a los bloques de código.
- **Uso en MDX**: Permiten crear documentos MDX más interactivos y navegables.

## Código General y su Relación con MDX

El resto del código utiliza bibliotecas de Node.js (`fs`, `path`) y utilidades adicionales (`readingTime`) para manejar archivos y calcular información relevante sobre el contenido.

## Resumen

- **No Exclusivo de MDX**: Mientras que las funciones y bibliotecas utilizadas no son exclusivas de MDX, están muy relacionadas y son esenciales para manejar y procesar contenido MDX en aplicaciones Next.js.
- **Integración de Herramientas**: Este código es un buen ejemplo de cómo integrar varias herramientas para leer, procesar y renderizar contenido en formato MDX, aprovechando las capacidades de Next.js.

---

