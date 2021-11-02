import MovieCard from "../components/MovieCard";
import MovieListFilter from "../components/MovieListFilter";

import movies from "../dummy-data";
import qs from "qs";
import { useLocation } from "react-router";

const MovieList = () => {
  const shows = [10, 20, 30];
  const categories = ["TV", "Movie"];
  const fields = ["title", "score"];

  const params = qs.parse(useLocation().search, {ignoreQueryPrefix:true});

  // Variable yang kita gunakan untuk melakukan penyaringan data
  const filter = {
    show: params.show || shows[0],
    category: params.category || categories[0],
    sort: params.sort || fields[0]
  };

  // Variable yang akan menyimpan data-data yang sudah difilter menggunakan variable filter diatas
  let filteredMovies = movies;
  filteredMovies = filteredMovies.filter(value => value.type === filter.category);
  filteredMovies = filteredMovies.sort((a,b) => (a[filter.sort] > b[filter.sort]) ? 1 : ((b[filter.sort] > a[filter.sort]) ? -1 : 0))
  filteredMovies = filteredMovies.slice(0, filter.show);
  
  return (
    <div className="row">
      <MovieListFilter />
      {filteredMovies.map((movie) => (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={movie.mal_id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
