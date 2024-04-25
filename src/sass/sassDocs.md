# Next.js with Sass

- https://nextjs.org/docs/app/building-your-application/styling/sass

En las nuevas versiones de next.js ya no es necesario configurar las rutas para que puedan usar sass, ya que el next.config.js se cambió a next.config.mjs, una vez que hayan instalado sass, puedes importar archivos .scss o .sass directamente en tus componentes de React.

Next.js se encargará de la compilación automáticamente.

---

## CLASE10 03/03/2024 CSS MODULES

Next.js ofrece varias formas de aplicar estilos a una aplicación:

- **Global CSS**: Es una forma simple y familiar de usar CSS tradicionalmente. Sin embargo, puede acarrear problemas a medida que la aplicación crece, ya que se aplica desde cualquier parte dentro del directorio de la aplicación (por ejemplo: `import './global.css'`).

- **CSS modules**: Permiten crear un alcance local para el CSS, evitando conflictos con los nombres de clases de otros componentes.

- **Tailwind CSS**: ¡Amor por Tailwind!

- **Sass**: Es un preprocesador CSS que extiende las capacidades del CSS.

- **CSS-in-JS**: Permite escribir CSS directamente en los componentes.

### CSS modules

- Pueden ser importados desde cualquier archivo dentro del directorio de la aplicación.
- Solo se habilitan con la extensión `.module.css`.
- En producción, todos los CSS modules se minifican y se dividen en archivos `.css`.
- Las hojas de estilo proporcionadas por paquetes externos pueden importarse en cualquier parte del directorio de la aplicación.

### Sass

- Viene pre-integrado con Next.js, pero es necesario instalar sus paquetes y utilizar las extensiones `.scss` y `.sass`.
- Se pueden utilizar componentes Sass a través de CSS modules con la extensión `.module.sass`.
- Es necesario configurar el archivo `next.config.mjs`.
  **¡AÚN NO SE ENCUENTRA DISPONIBLE LA FUNCIONALIDAD .module.sass CON TURBOPACK! Eviten usar Turbopack para evitar errores.**

```js
import { dirname, join } from 'path';
/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    includePaths: [join(dirname('./'), 'src/sass')],
    prependData: `@import "main.sass"`,
  },
};
export default nextConfig;
```

---

## My solution
```js
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

/** @type {import('next').NextConfig} */

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [join(__dirname, 'src/sass')],
    prependData: `@import "main.sass"`,
  },
};

export default nextConfig;
```

---

### Curso de Fundamentos de Sass: 

Crea tu Primera Landing Page: https://platzi.com/cursos/sass/


---

- https://www.npmjs.com/package/classnames

Classnames nos permite aplicar estilos dinámicos de manera sencilla y flexible en React. Podemos agregar o quitar clases de manera condicional según el estado de nuestros componentes, como en este caso al hacer clic en un botón. Esto nos permite cambiar los estilos de forma dinámica y mantener un código más limpio y legible.