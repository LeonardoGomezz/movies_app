import { useEffect, useState } from "react"
import { MoviesModel } from "@/service/types"
import { getPopularMovies, searchMovies } from "@/service/api/getPopulaMovies"

const useMovies = () => {
  const [movies, setMovies] = useState<MoviesModel[]>([])
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [query, setQuery] = useState("")

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

  // Función para manejar la búsqueda
  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery)
    setCurrentPage(1)
  }

  return {
    movies,
    currentPage,
    setCurrentPage,
    totalPages,
    setQuery,
    handleSearch,
  }
}

export default useMovies
