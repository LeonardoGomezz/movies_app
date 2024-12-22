import { Main } from "@/components/layout/Main";
import { MovieCard } from "@/components/utilsComponents/MovieCard";
import { SearchBar } from "@/components/utilsComponents/SearchBar";
import useMovies from "@/hooks/useMovies";
import { Pagination } from "@mui/material";
import Head from "next/head";

export default function Home() {
  const { movies, totalPages, currentPage, setCurrentPage, handleSearch, query, setQuery } = useMovies();

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Main>
      <Head>
        <title>Inicio - Tu Portal de Películas</title>
        <meta name="description" content="Explora una amplia selección de películas con reseñas, detalles y trailers. Encuentra los mejores filmes, desde los más populares hasta los más recientes, en un solo lugar. ¡No te pierdas nada del mundo del cine!" />
        <meta name="keywords" content="películas, cine, películas populares, reseñas de películas" />
      </Head>

      <div className="px-4">
      <SearchBar query={query} onSearch={handleSearch} setQuery={setQuery} />
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 w-fit gap-12 mx-auto">
        {
          Array.isArray(movies) && movies.map(movie =>(
            <MovieCard
            key={movie.id}
          item={movie}
        />
          ))
        }
      </div>
      <div className="my-12 flex justify-center">
        <Pagination
          page={currentPage}
          count={totalPages}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#ffffff",
              borderColor: "#ffffff",
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#ffffff",
              color: "#000000",
            },
          }}
        />
      </div>
    </Main>
  );
}
