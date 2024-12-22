# Movies App

[Visita el proyecto](https://movies-app-one-eosin.vercel.app/)

Movies App es una aplicación web que permite a los usuarios buscar películas, ver detalles de estas y guardar sus películas favoritas. La información sobre las películas proviene de la API **The Movie Database (TMDb)**.

## Tecnologías utilizadas

- **Next.js**: Framework para el desarrollo de aplicaciones React.
- **TypeScript**: Superset de JavaScript que permite una mejor experiencia de desarrollo con tipado estático.
- **Tailwind CSS**: Framework de diseño de CSS.
- **Material UI**: Biblioteca de componentes para React que implementa Material Design.
- **Joy UI**: Una librería de UI que complementa Material UI.
- **Material Icons**: Conjunto de íconos de Google Material.

## Estructura del Proyecto

La estructura de carpetas del proyecto es la siguiente:

📁 root/

├── 📁 components/ # Componentes reutilizables

├── 📁 envs/ # Contiene las variables de entorno necesarias

├── 📁 hooks/ # Hooks personalizados (e.g., useFavorites, useMovies)

├── 📁 mocks/ # Contiene un archivo JSON con respuestas de prueba de la API

├── 📁 pages/ # Páginas principales (e.g., Home, Favorites)

├── 📁 services/ # Módulo para realizar peticiones a la API


## Instalación y Configuración

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:

1. **Clona el repositorio**:

   git clone https://github.com/LeonardoGomezz/movies_app.git

2. **Entra al directorio**:

  cd movies_app

3. **Instala las dependencias**:

  npm install

4. **Configura las variables de entorno**:

   Ya que para las películas vienen de la API The Movie Database (TMDb) debes generar un token siguiendo los pasos de la [documentación](https://developer.themoviedb.org/docs/getting-started). luego copia y pega el token en la variable de entorno `NEXT_PUBLIC_AUTH_TOKEN`.

5. **Inicia el servidor de desarrollo**:

  npm run dev

## Funcionalidades

- **Búsqueda de películas**: Los usuarios pueden buscar películas usando un motor de búsqueda que consulta la API de TMDb.
- **Detalles de la película**: Al hacer clic en una película, se muestran detalles adicionales como título, sinopsis, y más.
- **Guardar películas favoritas**: Los usuarios pueden agregar y eliminar películas de una lista de favoritos.

## Hooks Personalizados

Para mantener el código organizado y reutilizable, se han creado dos custom hooks:

- **useMovies**: Este hook maneja toda la lógica relacionada con las películas, como obtener resultados de búsqueda y detalles de una película.
- **useFavorites**: Este hook maneja la lógica de la lista de favoritos, permitiendo agregar, eliminar y visualizar películas favoritas.

## Validaciones

- **Validación de la búsqueda**: El campo de búsqueda tiene una validación mínima de 3 caracteres para realizar una búsqueda.
- **Películas favoritas**: Se asegura que los usuarios no puedan agregar la misma película más de una vez a la lista de favoritos.

## Conclusión

Este proyecto fue desarrollado con el objetivo de proporcionar una forma fácil y rápida de buscar, ver detalles y guardar películas favoritas. La arquitectura modular permite una fácil escalabilidad y mantenimiento. Con una interfaz limpia y funcional, la aplicación está diseñada para ser accesible y eficiente.
