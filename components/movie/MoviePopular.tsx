import Link from "next/link";

interface IPopMovie {
  result: {
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
  };
}

const MoviePopular = ({ result }: IPopMovie) => {
  return (
    <Link href={`/movie/${result.id}`}>
      <li>{result.title}</li>
    </Link>
  );
};

export default MoviePopular;
