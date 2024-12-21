import FavoriteIcon from '@/public/icons/favoriteIcon'
import React from 'react'
import { MovieCardProps } from './types'
import { CircularProgress, Typography } from '@mui/joy'

export const MovieCard = ({id, poster_path, title, release_date, vote_average}: MovieCardProps) => {
  const percentage = Math.round(vote_average *10)

  const handleMovieId = (id: number) =>{
    window.location.href = `/movie-detail/${id}-${title}`
  }
  
  return (
    <article className='bg-[#262626] w-[350px] h-[600px] mx-auto rounded-lg text-white cursor-pointer' onClick={()=>handleMovieId(id)}>
      <img className='h-[400px] object-fill w-[350px] rounded-t-lg' src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} />
      <div className='p-4'>
      <h3 className='font-Inter text-[14px] font-bold h-[50px]'>{title}</h3>
      <p className='font-normal text-xs mt-2'>{release_date}</p>
      <div className='flex justify-center gap-12 mt-2 items-start'>
        <div className='flex flex-col justify-center items-center'>
          <p className='font-normal text-sm mb-3'>Rating</p>
          <CircularProgress determinate value={percentage} 
          variant='plain' 
          thickness={4}
          color={percentage > 69 ? 'success' : percentage > 50 ? 'warning' : 'danger' }
          sx={{ 
            '--CircularProgress-size': '48px',
           }} 
          >
            <Typography level='body-xs' sx={{color: 'white'}}>{percentage}%</Typography>
          </CircularProgress>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className='font-normal text-sm mb-4'>Favorites</p>
          <button>
          <FavoriteIcon width={45} height={45}/>
          </button>
        </div>
      </div>
      </div>
    </article>
  )
}
