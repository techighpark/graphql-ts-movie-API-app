import { gql } from "apollo-server";

export const typeDefs = gql`
  type AirQual {
    areaIndex: String
    site: String
  }

  type Query {
    airQual(numOfRows: Int, pageNo: Int): [AirQual]
  }
`;
