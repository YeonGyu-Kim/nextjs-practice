import { useQuery } from "react-query";
import { movieApi } from "../../api/api";
import MoviePopular from "./MoviePopular";

interface IPopMovies {
  results: [
    {
      adult: false;
      backdrop_path: string;
      genre_ids: number[];
      id: number;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      release_date: string;
      title: string;
      video: false;
      vote_average: number;
      vote_count: number;
    }
  ];
}

const Movie = () => {
  const { data: { results: popularMovies = [] } = {}, isLoading } =
    useQuery<IPopMovies>("popularMovie", movieApi.popular);

  return (
    <ul>
      {isLoading
        ? "Loading..."
        : popularMovies?.map((result) => (
            <MoviePopular key={result.id} result={result} />
          ))}
    </ul>
  );
};

export default Movie;
