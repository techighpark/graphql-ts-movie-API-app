import axios from "axios";

const BASE_URL = "https://yts.mx/api/v2/";
const MOVIE_LIST_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAIL_URL = `${BASE_URL}movie_details.json`;

export const getMovieList = async (
  limit?: number,
  rating?: number
): Promise<any> => {
  const {
    data: {
      data: { movies },
    },
  } = await axios({
    url: MOVIE_LIST_URL,
    params: { limit, minimum_rating: rating },
  });
  return movies;
};

export const getMovie = async (id: number): Promise<any> =>
  await axios({ url: MOVIE_DETAIL_URL, params: { movie_id: id } }).then(
    response => response.data.data.movie
  );
