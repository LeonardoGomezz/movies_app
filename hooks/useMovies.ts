import { useEffect, useState } from "react"
import { MovieCredistModel, MovieDetail, MoviesModel, VideoResult } from "@/service/types"
import {
  getCredits,
  getMovieVideos,
  getPopularMovies,
  searchMovieById,
  searchMovies,
} from "@/service/api/moviesAPI.ts"
import { useRouter } from "next/router"

const useMovies = () => {
  const [movies, setMovies] = useState<MoviesModel[]>([])
  const [movieDetail, setMovieDetail] = useState<MovieDetail | null>(null)
  const [movieCredits, setMovieCredits] = useState<MovieCredistModel | null>(null)
  const [movieTrailer, setMovieTrailer] = useState<VideoResult | null>(null)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [query, setQuery] = useState("")
  const route = useRouter()
  const { id } = route.query

  // Efecto para obtener las películas populares o realizar una búsqueda
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (query) {
          // Realizar búsqueda si hay query
          const res = await searchMovies(query, currentPage)
          setMovies(res.results)
          setTotalPages(res.total_pages)
        } else {
          // Obtener películas populares si no hay query
          const res = await getPopularMovies(currentPage)
          setMovies(res.results)
          setTotalPages(res.total_pages)
        }
      } catch (error) {
        console.error("Error al obtener las películas:", error)
      }
    }

    fetchMovies()
  }, [currentPage, query])

  // efecto para manejar los detalles de la pelicula
  useEffect(() => {
    const fetchMovieDetail = async () => {
      if (id) {
        try {
          // Asegúrate de que id sea una cadena
          const idAsString = Array.isArray(id) ? id[0] : id
          const parsedId = idAsString.split("-")[0]

          // Obtener detalles de la película
          const resMovieDetail = await searchMovieById(parsedId)
          setMovieDetail(resMovieDetail)

          // Obtener créditos de la película
          const resMovieCredits = await getCredits(parsedId)
          // Mostrar solo los primeros 4 actores
          const topActors = resMovieCredits.cast.slice(0, 4)
          setMovieCredits({ ...resMovieCredits, cast: topActors })

          //obtener videos de la pelicula
          const resMovieTrailers = await getMovieVideos(parsedId)
          const trailers = resMovieTrailers.results
          //obtener el primer trailer
          const firstTrailer = trailers.find((video: VideoResult) => video.type === "Trailer")
          setMovieTrailer(firstTrailer)
        } catch (error) {
          console.error(
            "Error al obtener los detalles o créditos de la película:",
            error
          )
        }
      }
    }

    fetchMovieDetail()
  }, [id])

  // Función para manejar la búsqueda
  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)
    setCurrentPage(1)
  }

  return {
    movies,
    movieDetail,
    movieCredits,
    movieTrailer,
    currentPage,
    setCurrentPage,
    totalPages,
    setQuery,
    handleSearch,
  }
}

export default useMovies
