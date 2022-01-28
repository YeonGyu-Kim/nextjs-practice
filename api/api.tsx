import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "6d095688f630b2115d0be560ed267853",
    language: "ko",
    region: "kr",
    page: 1,
  },
});

export const movieApi = {
  popular: async () =>
    await api.get("movie/popular").then((response) => response.data),
};
