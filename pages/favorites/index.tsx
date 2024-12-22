import { Main } from "@/components/layout/Main"
import { MovieCard } from "@/components/utilsComponents/MovieCard"
import { MoviesModel } from "@/service/types"
import Head from "next/head"
import { useEffect, useState } from "react"

export default function FavoritesPage() {
  const [favoriteList, setFavoriteList] = useState<MoviesModel[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    setFavoriteList(favorites)
    setLoading(false) 
  }, [])

  const handleRemoveFavorite = (id: number) => {
    setFavoriteList((prev) => prev.filter((movie) => movie.id !== id))
  }

  return (
    <Main>
      
      <Head>
        <title>Favoritos - Tu Lista de Películas</title>
        <meta name="description" content="Descubre y accede rápidamente a todas las películas que has agregado a tu lista de favoritos. Gestiona tus filmes preferidos y mantén tus mejores elecciones siempre a la mano." />
        <meta name="keywords" content="favoritos, películas favoritas, cine, listas de películas" />
      </Head>

      <h2 className="text-center text-2xl lg:text-4xl font-bold mt-20">Tu lista de favoritos</h2>

      {loading ? (
        <div className="text-center mt-10">
          <p>Cargando...</p>
        </div>
      ) : favoriteList.length === 0 ? (
        <div className="text-center mt-10">
          <h3>Tu lista de favoritos está vacía</h3>
        </div>
      ) : (
        <div className="mt-10 mb-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 w-fit gap-12 mx-auto">
          {favoriteList.map((item) => (
            <MovieCard
              key={item.id}
              item={item}
              onRemoveFavorite={handleRemoveFavorite}
            />
          ))}
        </div>
      )}
    </Main>
  )
}
