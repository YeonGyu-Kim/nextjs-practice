import type { NextPage } from "next";
import { QueryClient, QueryClientProvider } from "react-query";
import Movie from "../components/Movie";
import Seo from "../components/Seo";

const queryClient = new QueryClient();

const Home: NextPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Seo title='Home' />
        <Movie />
        <h1>Hello</h1>
      </div>
    </QueryClientProvider>
  );
};

export default Home;
