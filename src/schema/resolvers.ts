import { getMovie, getMovieList } from "./../db";

export const resolvers = {
  Query: {
    movieList: async (_: any, props: { limit: number; rating: number }) =>
      await getMovieList(props.limit, props.rating),
    movie: (_: any, { id }) => getMovie(id),
    hello: () => "hello",
  },
};
