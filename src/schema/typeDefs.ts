import { gql } from "apollo-server";

export const typeDefs = gql`
  type Movie {
    id: Int!
    title: String!
    genres: [String]
    rating: Float!
    year: Int!
    description_full: String!
    medium_cover_image: String!
  }

  type Query {
    movieList(limit: Int, rating: Float): [Movie]!
    movie(id: Int): Movie!
    hello: String!
  }
`;
