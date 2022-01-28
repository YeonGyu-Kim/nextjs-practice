import { useQuery } from "react-query";
import { movieApi } from "../api/api";

interface IPopMovie {
  data: {
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
  };
}

const Movie = () => {
  const { data: { results = [] } = {}, isLoading } = useQuery<any>(
    "popularMovie",
    movieApi.popular
  );
  console.log(results);
  return <div>{results.map((result: any) => result.title)}</div>;
};

export default Movie;
