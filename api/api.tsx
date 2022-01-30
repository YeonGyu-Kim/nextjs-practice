import axios from "axios";

export const movieApi = {
  popular: async () =>
    await axios.get("api/moviePopular").then((response) => response.data),
};
