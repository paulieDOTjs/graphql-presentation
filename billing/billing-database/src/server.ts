import express from "express";
import dotenv from "dotenv";
import { find, filter } from "lodash";

import { invoices } from "./invoices";

dotenv.config();

// Boot express
const app = express();
const port = process.env.PORT || 5002;

//routing
app.get("/api/invoiceNumber/:invoiceNumber", (req, res, next) => {
  const invc = find(
    invoices,
    (singInv) => singInv.invoiceNumber === +req.params.invoiceNumber
  );
  res.send(invc);
  next(JSON.stringify(invc));
});

app.get("/api/accountNumber/:accountNumber", (req, res, next) => {
  const invc = filter(
    invoices,
    (singInv) => singInv.accountNumber === +req.params.accountNumber
  );
  res.send(invc);
  next(JSON.stringify(invc));
});

app.get("/api/all", (_req, res, next) => {
  res.send(invoices);
  next(JSON.stringify(invoices));
});

app.use("/", (_req, res) => {
  res.status(200).send("Hello, World!");
});

// Start server
app.listen(port, () =>
  console.log(`Server is listening at http://localhost:${port}`)
);
