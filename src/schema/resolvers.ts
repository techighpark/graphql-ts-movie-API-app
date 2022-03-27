import { getAirQual } from "../db";

export const resolvers = {
  Query: {
    airQual: async (_: any, { numOfRows, pageNo }: any) =>
      await getAirQual(numOfRows, pageNo),
  },
};
