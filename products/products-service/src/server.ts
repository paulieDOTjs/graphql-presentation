import { ApolloServer } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";

import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

const port = 4003;

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}graphql`);
});

// TODO
// shipment -> product
// shipment -> customer
