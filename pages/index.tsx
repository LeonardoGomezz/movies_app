import { Main } from "@/components/layout/Main";
import { MovieCard } from "@/components/utilsComponents/MovieCard";
import { SearchBar } from "@/components/utilsComponents/SearchBar";
import useMovies from "@/hooks/useMovies";
import { Pagination } from "@mui/material";

export default function Home() {
  const { movies, currentPage, setCurrentPage, totalPages, handleSearch, query, setQuery } = useMovies();

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Main>
      <div className="px-4">
      <SearchBar query={query} onSearch={handleSearch} setQuery={setQuery} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 w-fit gap-12 mx-auto">
        {
          Array.isArray(movies) && movies.map(movie =>(
            <MovieCard
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
          release_date={movie.release_date}
          vote_average={movie.vote_average}
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
