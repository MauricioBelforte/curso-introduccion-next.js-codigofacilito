Clase 18

# Instalando paquetes requeridos para MDX

# Instalación de Paquetes Adicionales para MDX

Para obtener todas las funcionalidades avanzadas que ofrece la configuración adicional mencionada en tu curso, solo necesitas instalar los paquetes adicionales usando el siguiente comando:

```bash
yarn add gray-matter mdx-prism reading-time next-mdx-remote remark-slug remark-autolink-headings remark-code-titles
```

No es necesario ejecutar los dos comandos por separado. El comando mencionado instalará todos los paquetes adicionales necesarios para mejorar tu experiencia con MDX en tu proyecto Next.js.

## Para Aclarar

### 1. Instalar Paquetes Básicos para MDX
- Si solo necesitas la funcionalidad básica de MDX, puedes usar:
  ```bash
  yarn add @next/mdx @mdx-js/loader
  ```

### 2. Instalar Paquetes Adicionales Recomendados
- Para funcionalidades avanzadas y una configuración más robusta, utiliza:
  ```bash
  yarn add gray-matter mdx-prism reading-time next-mdx-remote remark-slug remark-autolink-headings remark-code-titles
  ```

Usando este segundo comando, estarás agregando todas las capacidades adicionales descritas, como análisis de front-matter, resaltado de sintaxis, cálculo de tiempo de lectura, y más.

---




# Comparación de Configuraciones para MDX en Next.js

## Instalación Inicial Proporcionada

### Paquetes Instalados:
- **@next/mdx**
- **@mdx-js/loader**

### Funcionalidad:
- Permite integrar y utilizar MDX en tu proyecto Next.js.

## Instalación Adicional Sugerida en Tu Curso

### Paquetes Sugeridos:
- **gray-matter**:
  - **Función**: Permite analizar el front-matter de los archivos Markdown. El front-matter es una sección al comienzo del archivo que contiene metadatos.
  - **Uso**: Extrae datos como el título, fecha, etiquetas, etc., del contenido de tus archivos MDX.

- **mdx-prism**:
  - **Función**: Proporciona resaltado de sintaxis para el código en tus archivos MDX usando Prism.js.
  - **Uso**: Mejora la visualización del código embebido en tus documentos.

- **reading-time**:
  - **Función**: Calcula el tiempo estimado de lectura de un contenido.
  - **Uso**: Mostrar el tiempo estimado de lectura de tus artículos o documentos.

- **next-mdx-remote**:
  - **Función**: Permite cargar y renderizar contenido MDX de manera remota en Next.js.
  - **Uso**: Renderiza contenido MDX desde rutas API o fuentes de datos dinámicas.

- **remark-slug**:
  - **Función**: Añade IDs únicos a los encabezados en Markdown.
  - **Uso**: Facilita el enlace a secciones específicas de tus documentos.

- **remark-autolink-headings**:
  - **Función**: Añade enlaces automáticos a los encabezados.
  - **Uso**: Permite a los usuarios copiar y compartir enlaces directos a secciones específicas de tus documentos.

- **remark-code-titles**:
  - **Función**: Añade títulos a los bloques de código en Markdown.
  - **Uso**: Proporciona contexto adicional a los fragmentos de código en tus documentos.

## Conclusión

La instalación adicional sugerida en tu curso proporciona funcionalidades avanzadas y mejora la interactividad y gestión del contenido MDX en tu proyecto. Si tu objetivo es tener una configuración más robusta y rica en características, seguir las sugerencias del curso sería beneficioso.

## Recomendación

Te recomiendo instalar todos los paquetes adicionales mencionados en tu curso para aprovechar al máximo las capacidades de MDX:

```bash
yarn add gray-matter mdx-prism reading-time next-mdx-remote remark-slug remark-autolink-headings remark-code-titles
```

Esto te permitirá tener un entorno de trabajo más completo y funcional, facilitando la creación de contenido dinámico e interactivo.

---

Por ultimo creamos una carpeta en la raiz con el nombre data ,y en la proxima clase vamos a configurar una libreria de mdx, que va devolvernos todos los datos de la carpeta data.