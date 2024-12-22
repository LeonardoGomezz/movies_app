import useMovies from "@/hooks/useMovies"
import React, { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { FreeMode, Navigation } from "swiper/modules"
import { MovieCard } from "../utilsComponents/MovieCard"
import SwiperCore, { Swiper as SwiperType } from "swiper"
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material"

export const RelatedMovies = () => {
  SwiperCore.use([Navigation])
  const swiperRef = useRef<SwiperType | null>(null)
  const { relatedMovies } = useMovies()
  
  return (
    <div className="mt-10 sm:mt-20">
      <h2 className="text-2xl sm:text-[35px] font-bold font-ibm-plex-sans  pl-4 sm:pl-10 2xl:pl-20">
        Peliculas similares
      </h2>
      <div className="pb-20 relative mt-10 xl:mt-0">
        <div className="flex items-center w-full justify-center gap-8 xl:justify-end my-8 pr-4 absolute z-20 bottom-0 inset-x-0 xl:static">
          <a type="button" onClick={() => swiperRef.current?.slidePrev()}>
            <i className="bx bx-chevron-left">
              <ArrowBackIosRounded />
            </i>
          </a>
          <a type="button" onClick={() => swiperRef.current?.slideNext()}>
            <i className="bx bx-chevron-left">
              <ArrowForwardIosRounded />
            </i>
          </a>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper"
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {Array.isArray(relatedMovies) &&
            relatedMovies.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard
                 item={item}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}
