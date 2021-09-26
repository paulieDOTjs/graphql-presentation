import express from "express";
import dotenv from "dotenv";
import { find } from "lodash";

import accounts from "./accounts";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

//routing
app.get("/api/all", (_req, res, next) => {
  res.send(accounts);
  next(JSON.stringify(accounts));
});

app.get("/api/accountNumber/:accountNumber", (req, res, next) => {
  const acct = find(
    accounts,
    (singAcct) => singAcct.accountNumber === +req.params.accountNumber
  );
  res.send(acct);
  next(JSON.stringify(acct));
});

app.get("/api/username/:username", (req, res, next) => {
  const acct = find(
    accounts,
    (singAcct) => singAcct.username === req.params.username
  );
  res.send(acct);
  next(JSON.stringify(acct));
});

app.use("/", (_req, res) => {
  res.status(200).send("Hello, World!");
});

// Start server
app.listen(port, () =>
  console.log(`Server is listening at http://localhost:${port}`)
);
