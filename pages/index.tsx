import type { NextPage } from "next";
import { QueryClient, QueryClientProvider } from "react-query";
import Movie from "../components/movie/Movie";
import Seo from "../components/Seo";

const queryClient = new QueryClient();

const Home: NextPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Seo title='Home' />
      <Movie />
    </QueryClientProvider>
  );
};

export default Home;
