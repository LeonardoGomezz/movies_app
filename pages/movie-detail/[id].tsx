import { Main } from "@/components/layout/Main";
import { Header } from "@/components/movieDetails/Header";
import { RelatedMovies } from "@/components/movieDetails/RelatedMovies";

export default function index () {
 
  return(
    <Main>
      <Header/>
      <RelatedMovies/>
    </Main>
  )
}