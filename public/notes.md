### ¿Cómo Organizar las Imágenes en la Carpeta 'public' de Next.js?

En un proyecto Next.js, es recomendable guardar en la carpeta `public` aquellas imágenes que son estáticas y que se utilizan directamente en tu interfaz de usuario o que necesitan ser accesibles de manera pública sin procesamiento especial por parte del servidor.

Ejemplo de tipos de imágenes que puedes guardar en la carpeta `public`:

- **Imágenes del sitio web**:
  - Logotipos.
  - Iconos.
  - Imágenes de fondo.
  - Banners estáticos.
  - Cualquier imagen que forme parte del diseño y no necesite generarse dinámicamente en tiempo de ejecución.

- **Contenido estático**:
  - Imágenes que se utilizan para ilustrar contenido estático, como páginas de producto, publicaciones de blog, perfiles de usuario, etc.

- **Recursos multimedia básicos**:
  - Archivos de audio y video que no requieren procesamiento especial del servidor para su reproducción.
  - Miniaturas o vistas previas de archivos multimedia.

Por otro lado, las imágenes que son generadas dinámicamente, como las imágenes de perfil de usuario personalizadas, las imágenes de productos generadas según las preferencias del usuario, las imágenes que requieren procesamiento del lado del servidor para cambiar su tamaño o formato, etc., generalmente no deben colocarse en la carpeta `public`. En su lugar, puedes utilizar rutas dinámicas o servicios de almacenamiento de archivos para manejar estas imágenes de manera adecuada.

---

### Importar imagenes desde otro lugar

Para incluir imágenes desde otro lugar, como Pexels o Flowbite Images, en tu aplicación Next.js, debes agregar el siguiente código a tu archivo `next.config.js`:

```javascript
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "flowbite.s3.amazonaws.com",
      },
    ],
  },
};
```

Esto permitirá que tu aplicación cargue imágenes desde los lugares especificados utilizando los patrones remotos proporcionados.

---

Página utilizada para montar el blur: https://blurred.dev/

command + shift + R = Recargar sin cache