import { ApolloServer } from "apollo-server-express";
import { ApolloGateway } from "@apollo/gateway";

// Initialize an ApolloGateway instance and pass it an array of
// your implementing service names and URLs
const gateway = new ApolloGateway({
  serviceList: [
    { name: "products-service", url: "http://localhost:4003" },
    { name: "billing-service", url: "http://localhost:4002" },
    { name: "account-service", url: "http://localhost:4001" },
  ],
});

// Pass the ApolloGateway to the ApolloServer constructor
export const apollo = new ApolloServer({
  gateway,
  tracing: true,
  // Disable subscriptions (not currently supported with ApolloGateway)
  subscriptions: false,
});
