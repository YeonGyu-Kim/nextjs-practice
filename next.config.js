/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:slug",
        destination: "/",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/moviePopular",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko&region=kr&page=1`,
      },
    ];
  },
};

module.exports = nextConfig;
