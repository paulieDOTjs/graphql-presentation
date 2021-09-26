import { apollo } from "./api/apollo.js";
import dotenv from "dotenv";
import express from "express";
import logger from "morgan";
import path from "path";

dotenv.config();

const app = express();
const port = process.env.PORT || "4002";
const __dirname = path.resolve();

app.set("port", port);
app.use(logger("dev"));
app.use(express.json());

app.use("/public", express.static(path.join(__dirname, "./public")));

app.get("/", (_req, res) => {
  res.redirect(301, "/graphql");
});
app.post("/", (_req, res) => {
  res.redirect(308, "/graphql");
});

async function startServer() {
  await apollo.start();

  apollo.applyMiddleware({ app });

  app.listen({ port }, () => {
    console.log(
      "🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 "
    );
    console.log("🌟".padEnd(81, " ") + "🌟");
    console.log(
      `🌟      Now browse to http://localhost:${port}${apollo.graphqlPath} for GraphQL Playground`.padEnd(
        81,
        " "
      ) + "🌟"
    );
    console.log(
      `🌟       or http://localhost:${port}/public/visualizer.html for visualizer`.padEnd(
        81,
        " "
      ) + "🌟"
    );
    console.log("🌟".padEnd(81, " ") + "🌟");
    console.log(
      "🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 "
    );
  });
}
startServer();
