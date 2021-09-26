import { buildFederatedSchema } from "@apollo/federation";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./typeDefs.js";

export const schema = buildFederatedSchema({
  resolvers,
  typeDefs,
});
