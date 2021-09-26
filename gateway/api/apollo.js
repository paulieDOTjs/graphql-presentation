import { NODE_ENV, currentEnv } from "../config/NODE_ENV.js";

import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer } from "apollo-server-express";

const gateway = new ApolloGateway({
  serviceList: [
    { name: "products-service", url: "http://localhost:4003" },
    { name: "billing-service", url: "http://localhost:4002" },
    { name: "account-service", url: "http://localhost:4001" },
  ],
});

export const apollo = new ApolloServer({
  gateway,

  tracing: currentEnv === NODE_ENV.DEV || currentEnv === NODE_ENV.STAGE,

  introspection: true,

  debug: currentEnv === NODE_ENV.DEV,

  playground: {
    faviconUrl: "/public/favicon.ico",
    title: "accounts",
    settings: {
      "editor.fontFamily":
        "'Source Code Pro', 'Consolas', 'Inconsolata', 'Droid Sans Mono', 'Monaco', monospace",
      "editor.fontSize": 16,
    },
  },

  formatError: (err) => {
    if (
      err.message.startsWith("Database Error: ") &&
      currentEnv !== NODE_ENV.DEV
    ) {
      return new Error("Internal server error");
    }

    return err;
  },

  subscriptions: false,
});
