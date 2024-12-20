import { movieServiceRequest } from "./movieServiceRequest.instance"

export const getPopularMovies = async(currentPage: number) =>{
  const getRequest = movieServiceRequest('GET')
  try {
    const res = await getRequest({
      url: `/3/movie/popular?language=es-CO&page=${currentPage}`
    })
    const response = res.data
    return response
  } catch (error) {
    console.error('Error al realizar la solicitud', error)
    throw error
  }
}

export const searchMovies = async(query: string, currentPage: number) =>{
  const getRequest = movieServiceRequest('GET')
  try {
    const res = await getRequest({
      url: `/3/search/movie?query=${query}&include_adult=false&language=es-CO&page=${currentPage}`
    })
    const response = res.data
    return response
  } catch (error) {
    console.error('Error al realizar la solicitud', error)
    throw error
  }
}