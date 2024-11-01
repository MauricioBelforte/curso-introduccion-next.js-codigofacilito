Clase 16

Creando nuestro proyecto

# Configuración Inicial: Instalación de Yarn y Next.js

## Instalación de Yarn

1. **Instalar Node.js**: Si no tienes Node.js instalado, puedes descargarlo desde [nodejs.org](https://nodejs.org/).
2. **Instalar Yarn usando npm**:

```bash
npm install --global yarn
```

3. **Verificar la Instalación**:

```bash
yarn --version
```

## Creación de un Proyecto Next.js

1. **Crear un Nuevo Proyecto Next.js**:

```bash
npx create-next-app@latest nombre-del-proyecto
```

2. **Navegar al Directorio del Proyecto**:

```bash
cd nombre-del-proyecto
```

---

# Resumen de Opciones de Configuración

## Decisiones de Configuración

### 1. ¿Te gustaría usar ESLint?
- **ESLint**: Ayuda a mantener tu código limpio y libre de errores. Si decides no usarlo ahora, siempre puedes configurarlo más adelante.
- **Decisión**: 
  - **Yes**: Si deseas mejorar la calidad y consistencia del código.
  - **No**: Si prefieres no configurarlo ahora y lo harás en el futuro si lo necesitas.

### 2. ¿Te gustaría usar Tailwind CSS?
- **Tailwind CSS**: Es un framework de CSS utilitario que te permite diseñar directamente en tu HTML utilizando clases. Es muy poderoso para crear interfaces de usuario rápidas y personalizables.
- **Decisión**: 
  - **Yes**: Si deseas usar Tailwind CSS para estilizar tu proyecto.
  - **No**: Si prefieres usar otro método para estilizar (como CSS tradicional o algún otro framework de CSS).

### 3. ¿Te gustaría que tu código esté dentro de un directorio `src/`?
- **Directorio `src/`**: Colocar tu código fuente en un directorio `src/` es una práctica común que ayuda a mantener la estructura del proyecto organizada. No es obligatorio, pero puede ser útil para grandes proyectos.
- **Decisión**: 
  - **Yes**: Si prefieres tener una estructura de proyecto más organizada.
  - **No**: Si prefieres mantener la estructura de proyecto más simple con archivos directamente en la raíz.

### 4. ¿Te gustaría usar el App Router (recomendado)?
- **App Router**: Permite manejar la navegación en tu aplicación de manera más eficiente y es una práctica recomendada.
- **Decisión**:
  - **Yes**: Si deseas seguir las recomendaciones y usar una herramienta eficiente para la navegación.
  - **No**: Si prefieres configurar la navegación de otra manera.

### 5. ¿Te gustaría usar Turbopack para `next dev`?
- **Turbopack**: Es una herramienta de desarrollo rápido para aplicaciones Next.js que puede acelerar el tiempo de construcción y recarga en caliente. Actualmente, es una tecnología experimental.
- **Decisión**:
  - **Yes**: Si deseas probar esta nueva tecnología experimental para un desarrollo más rápido.
  - **No**: Si prefieres usar el sistema de desarrollo estándar.

### 6. ¿Te gustaría personalizar el alias de importación (por defecto es `@/*`)?
- **Alias de Importación**: Permite usar alias personalizados para importar módulos. El alias por defecto es `@/*`.
- **Decisión**:
  - **Yes**: Si tienes una convención específica de alias que prefieres usar.
  - **No**: Si estás conforme con el alias por defecto.

### Resumen de Decisiones
- **ESLint**: No (puedes agregarlo más adelante si lo necesitas).
- **Tailwind CSS**: Yes (para estilizar tu proyecto fácilmente).
- **Directorio `src/`**: Yes (para una estructura organizada).
- **App Router**: Yes (es recomendable).
- **Turbopack para `next dev`**: No (puedes probarlo más adelante si deseas).
- **Personalizar Alias de Importación**: No (usar el alias por defecto `@/*`).

---

# Organización del Proyecto y Subida a GitHub

## Crear una Carpeta para la Documentación

1. Dentro de tu proyecto, crea una carpeta específica para tus apuntes. Esto ayudará a mantener todo ordenado y separado del código fuente.
   - Ejemplo: `documentacion`

## Usar Markdown para los Apuntes

- Los archivos Markdown (`.md`) son una excelente manera de mantener apuntes bien formateados y fáciles de leer. 
  - Ejemplo: `documentacion/introduccion.md`, `documentacion/nextjs.md`.

## Añadir un `README.md`

- Un archivo `README.md` en la raíz del proyecto puede proporcionar