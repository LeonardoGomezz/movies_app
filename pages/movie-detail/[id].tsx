import { Main } from "@/components/layout/Main";
import { Header } from "@/components/movieDetails/Header";
import { RelatedMovies } from "@/components/movieDetails/RelatedMovies";
import useMovies from "@/hooks/useMovies";
import Head from "next/head";

export default function Home () {
  const {movieDetail} = useMovies()

  if (!movieDetail) {
    return <p>Cargando...</p>; // Muestra un mensaje de carga si no se han cargado los detalles de la película
  }

  // Extrae la información necesaria para SEO
  const title = movieDetail.title;
  const description = movieDetail.overview || "No hay descripción disponible";
  const image = `https://image.tmdb.org/t/p/original${movieDetail.poster_path}`;
 
  return(
    <Main>
      <Head>
        <title>{title} - Detalles de Película</title>
        <meta name="description" content={`Descubre todos los detalles de la película ${title}. Obtén información sobre su trama, elenco, fecha de estreno, puntuación, tráiler y más. Sumérgete en el mundo de ${title} con reseñas y curiosidades para disfrutar aún más de esta increíble película.`} />
        <meta name="keywords" content={`${title}, película, detalles de película, reseña, tráiler`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="movie" />
      </Head>
      <Header/>
      <RelatedMovies/>
    </Main>
  )
}