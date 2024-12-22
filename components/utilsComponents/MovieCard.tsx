import FavoriteIcon from "@/public/icons/favoriteIcon"
import React from "react"
import { CircularProgress, Typography } from "@mui/joy"
import { MoviesModel } from "@/service/types"
import useFavorites from "@/hooks/useFavorites"
import Image from "next/image"

interface Props {
  item: MoviesModel
  onRemoveFavorite?: (id: number) => void // Nueva prop
}

export const MovieCard = ({ item, onRemoveFavorite }: Props) => {
  const percentage = Math.round(item?.vote_average * 10)
  const { toggleFavorite, isFavorite } = useFavorites(item)

  const handleRemoveFavorite = () => {
    toggleFavorite()
    if (isFavorite && onRemoveFavorite) {
      onRemoveFavorite(item.id)
    }
  }

  return (
    <article className="bg-[#262626] w-[350px] h-[600px] mx-auto rounded-lg text-white">
      <Image
        className="h-[400px] object-fill w-[350px] rounded-t-lg cursor-pointer"
        src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
        alt={item?.title}
        title={item?.title}
        width={350}
        height={400}
        priority={true}
        onClick={() => window.location.href = `/movie-detail/${item.id}-${item.title}`}
      />
      <div className="p-4">
        <div className="h-[50px]">
        <h3
          className="text-wrap w-fit font-Inter text-[14px] font-bold cursor-pointer hover:text-blue-500"
          onClick={() => window.location.href = `/movie-detail/${item.id}-${item.title}`}
          >
          {item?.title}
        </h3>
          </div>
        <p className="font-normal text-xs mt-2">{item?.release_date}</p>
        <div className="flex justify-center gap-12 mt-2 items-start">
          <div className="flex flex-col justify-center items-center">
            <p className="font-normal text-sm mb-3">Rating</p>
            <CircularProgress
              determinate
              value={percentage}
              variant="plain"
              thickness={4}
              color={
                percentage > 69 ? "success" :
                percentage > 50 ? "warning" :
                "danger"
              }
              sx={{ "--CircularProgress-size": "48px" }}
            >
              <Typography level="body-xs" sx={{ color: "white" }}>
                {percentage}%
              </Typography>
            </CircularProgress>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-normal text-sm mb-4">Favorites</p>
            <button onClick={handleRemoveFavorite}>
              <FavoriteIcon width={45} height={45} fill={isFavorite ? "#ff6347" : "white"} />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}