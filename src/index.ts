import { resolvers } from "./schema/resolvers";
import { ApolloServer } from "apollo-server";
import {
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import { typeDefs } from "./schema/typeDefs";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    process.env.NODE_ENV === "production"
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
});
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
