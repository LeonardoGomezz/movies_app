import React from "react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { CircularProgress, Stack, Typography } from "@mui/joy"
import Sheet from "@mui/joy/Sheet"
import { styled } from "@mui/joy/styles"
import { TrailerButton } from "../utilsComponents/TrailerButton"
import { MovieCredistModel, MovieDetail, VideoResult } from "@/service/types"

interface Props {
  details: MovieDetail
  credits: MovieCredistModel | null
  trailer: VideoResult | null
}

export const Header = ({details, credits, trailer} : Props) => {
  const formatReleaseDate = details?.release_date.toString()
  const percentage = Math.round((details?.vote_average ?? 0) * 10)

  const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography["body-sm"],
    textAlign: "center",
    fontWeight: theme.fontWeight.md,
    color: theme.vars.palette.text.secondary,
    border: "1px solid",
    borderColor: theme.palette.divider,
    padding: theme.spacing(1),
    borderRadius: theme.radius.md,
  }))

  return (
    <div className="relative xl:h-[660px] flex xl:items-center">
      <img
        className="h-[550px] xl:h-[660px] w-full absolute opacity-60 object-cover object-top hidden xl:block"
        src={`https://image.tmdb.org/t/p/original${details?.backdrop_path}`}
        alt={details?.title}
        title={details?.title}
      />
      <div className="relative z-10 w-full xl:px-10 2xl:px-20 flex flex-col xl:flex-row gap-10 xl:gap-20 xl:mt-8">
        <div className="relative">
          <img
            className="xl:hidden opacity-60 w-full h-full object-cover absolute"
            src={`https://image.tmdb.org/t/p/original${details?.backdrop_path}`}
            alt={details?.title}
            title={details?.title}
          />
          <div className="flex flex-col items-center sm:items-start relative z-20 mt-8 xl:mt-0 mb-8 xl:mb-0 sm:pl-10 xl:pl-0">
            <img
              className="w-[300px]"
              src={`https://image.tmdb.org/t/p/original${details?.poster_path}`}
              alt={details?.title}
              title={details?.title}
            />
            <div className="w-[300px]">
              {trailer && trailer?.key ? (
                <TrailerButton TrailerKey={trailer?.key} />
              ) : null}
            </div>
          </div>
        </div>
        <div className="px-4 sm:px-10 xl:px-0">
          <h1 className="text-2xl sm:text-[35px] font-bold font-ibm-plex-sans">
            {details?.title}
          </h1>
          {formatReleaseDate && formatReleaseDate !== "" ? (
            <p className="font-normal text-base mt-2">
              {format(formatReleaseDate, "dd MMM yyyy", {
                locale: es,
              })}
            </p>
          ) : null}
          <div className="mt-4">
            <p className="font-bold font-ibm-plex-sans text-xl sm:text-2xl mb-2">
              Resumen:
            </p>
            <p className="font-normal text-sm 2xl:text-base">
              {details?.overview}
            </p>
          </div>
          <div className="mt-8 flex gap-4 items-center">
            <CircularProgress
              determinate
              value={percentage}
              thickness={8}
              color={
                percentage > 69
                  ? "success"
                  : percentage > 50
                  ? "warning"
                  : "danger"
              }
              sx={{
                "--CircularProgress-size": "92px",
              }}
            >
              <Typography level="title-lg" sx={{ color: "white" }}>
                {percentage}%
              </Typography>
            </CircularProgress>
            <p className="font-bold text-xl">Puntuacion</p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <p>
              Actores:&nbsp
              {Array.isArray(credits?.cast) && (
                <span>
                  {credits.cast
                    .map((item) => item.name)
                    .slice(0, 4)
                    .join(", ")}
                  .
                </span>
              )}
            </p>
          </div>
          <div className="mt-4 pb-4">
            <p className="text-base font-normal mb-2">Genero:</p>
            <Stack
              direction={"row"}
              // spacing={{ xs: 1, sm: 2, md: 4 }}
              flexWrap={"wrap"}
              gap={1}
            >
              {Array.isArray(details?.genres) &&
                details.genres.map((item) => (
                  <Item key={item.id}>{item.name}</Item>
                ))}
            </Stack>
          </div>
        </div>
      </div>
    </div>
  )
}
