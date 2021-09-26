import { NODE_ENV, currentEnv } from "../config/NODE_ENV.js";

import { ApolloServer } from "apollo-server-express";
import { schema } from "./schema/schema.js";

export const apollo = new ApolloServer({
  schema,

  introspection: true,

  debug: currentEnv === NODE_ENV.DEV,

  tracing: currentEnv === NODE_ENV.DEV || currentEnv === NODE_ENV.STAGE,

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
});
