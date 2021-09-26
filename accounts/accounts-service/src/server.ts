import { ApolloServer } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

const port = 4001;

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}graphql`);
});

// TODO cust by username
