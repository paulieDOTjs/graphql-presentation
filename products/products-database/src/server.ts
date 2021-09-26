import express from "express";
import dotenv from "dotenv";
import { find, filter } from "lodash";

import { shipments } from "./shipments";
import { products } from "./products";

dotenv.config();

// Boot express
const app = express();
const port = process.env.PORT || 5003;

app.use("/", (_req, _res, next) => {
  console.log("Product API hit.");
  next();
});

//routing
app.get("/api/shipments/trackingNumber/:trackingNumber", (req, res, next) => {
  const ship = find(
    shipments,
    (singleShip) => singleShip.trackingNumber === +req.params.trackingNumber
  );

  res.send(ship);
  next(JSON.stringify(ship));
});

app.get("/api/shipments/accountNumber/:accountNumber", (req, res, next) => {
  const ships = filter(
    shipments,
    (singleShip) => singleShip.accountNumber === +req.params.accountNumber
  );

  res.send(ships);
  next(JSON.stringify(ships));
});

app.get("/api/products/productID/:productID", (req, res, next) => {
  const prod = find(
    products,
    (singleProd) => singleProd.productID === +req.params.productID
  );

  res.send(prod);
  next(JSON.stringify(prod));
});

app.get("/api/products/trackingNumber/:trackingNumber", (req, res, next) => {
  const prodIDs: number[] = [];

  const trackNum = +req.params.trackingNumber;

  find(
    shipments,
    (singleShip) => singleShip.trackingNumber === trackNum
  )?.products.forEach((prod) => prodIDs.push(prod.productID));

  const prods = filter(products, (prod) => prodIDs.includes(prod.productID));

  res.send(prods);
  next(JSON.stringify(prods));
});

app.get("/api/products/accountNumber/:accountNumber", (req, res, next) => {
  const productIDs: number[] = [];

  const acctNum = +req.params.accountNumber;

  shipments.forEach((ship) => {
    if (ship.accountNumber === acctNum) {
      ship.products.forEach((prod) => productIDs.push(prod.productID));
    }
  });

  const prods = filter(products, (prod) => productIDs.includes(prod.productID));

  res.send(prods);
  next(JSON.stringify(prods));
});

app.get("/api/all", (_req, res, next) => {
  res.send({ shipments, products });
  next(JSON.stringify({ shipments, products }));
});

// Start server
app.listen(port, () =>
  console.log(`Server is listening at http://localhost:${port}`)
);
