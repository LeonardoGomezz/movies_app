import { useState, useEffect } from 'react'
import { MoviesModel } from '@/service/types'
import { toast } from 'sonner'

const useFavorites = (item: MoviesModel) => {
 // Verificar si la película está en los favoritos al cargar el componente
 const [isFavorite, setIsFavorite] = useState<boolean>(false)

 useEffect(() => {
   const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
   const isInFavorites = favorites.some((movie: MoviesModel) => movie.id === item.id)
   setIsFavorite(isInFavorites)
 }, [item.id])

 const toggleFavorite = () => {
   let favorites = JSON.parse(localStorage.getItem('favorites') || '[]')

   if (isFavorite) {
     // Si está en favoritos, eliminarla
     favorites = favorites.filter((movie: MoviesModel) => movie.id !== item.id)
     toast.warning('Pelicula removida de tu lista de favoritos')
   } else {
     // Si no está en favoritos, agregarla
     favorites.push(item)
     toast.success('Pelicula añadida a favoritos')
   }

   // Actualizar el estado de favoritos en localStorage
   localStorage.setItem('favorites', JSON.stringify(favorites))
   setIsFavorite(!isFavorite) // Actualizar el estado local para cambiar el estilo del botón
 }

  return {
    toggleFavorite,
    isFavorite,
  }
}

export default useFavorites
