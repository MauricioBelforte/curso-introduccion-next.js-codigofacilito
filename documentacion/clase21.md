Clase 21

Creando nuestros primeros posts


Vamos a crear un componente que va a pasar cualquier componente de react a mdx.

creamos una carpeta components y dentro el archivo MDXComponents.tsx

# Análisis y Explicación del Código

El siguiente código define un componente de React utilizando TypeScript. Este componente personalizado permite manejar enlaces (links) de forma diferenciada, dependiendo si son enlaces internos o externos.

```tsx
// Dependencies
import Link, { LinkProps } from "next/link";
```

Este bloque de código importa las dependencias necesarias. `Link` y `LinkProps` se importan desde la librería `next/link`, que es una parte esencial de Next.js para manejar enlaces internos en aplicaciones Next.js.

```tsx
const CustomLink = (props: React.ComponentProps<"a"> & LinkProps) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));
```

Aquí definimos un componente funcional llamado `CustomLink`. Este componente toma `props` de tipo `React.ComponentProps<"a"> & LinkProps`, lo que significa que `props` combina las propiedades de un elemento HTML `a` (enlace) con las propiedades específicas de los enlaces de Next.js.

- `const href = props.href;`: Extrae el valor de `href` de las propiedades.
- `const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));`: Verifica si el enlace es interno. Un enlace interno es aquel que comienza con `/` o `#`.

```tsx
  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }
  
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};
```

En esta parte del código, se realiza una bifurcación condicional dependiendo del tipo de enlace:

- Si el enlace es interno (`isInternalLink` es `true`), se utiliza el componente `Link` de Next.js para envolver el enlace, asegurando que se maneje correctamente en la navegación interna de la aplicación.
- Si el enlace es externo, se devuelve un elemento `a` regular con las propiedades necesarias (`target="_blank"` y `rel="noopener noreferrer"`) para abrir el enlace en una nueva pestaña de forma segura.

```tsx
const MDXComponents = {
  a: CustomLink,
};
```

Aquí se define un objeto `MDXComponents` donde se asigna el componente `CustomLink` a la propiedad `a`. Esto permite reemplazar los elementos `a` en el contenido MDX por nuestro componente `CustomLink`.

```tsx
export default MDXComponents;
```

Finalmente, se exporta el objeto `MDXComponents` para que pueda ser utilizado en otras partes de la aplicación.
