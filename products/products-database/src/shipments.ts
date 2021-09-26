import { shipment } from "./shipInterfaces";

export const shipments: shipment[] = [
  {
    accountNumber: 1,
    trackingNumber: 1,
    shippingAddress: "123 Testdata St.",
    city: "Minneapolis",
    state: "Minnesota",
    country: "US",
    zipOrPostalCode: "44592",

    products: [
      { productID: 1, quantity: 2 },
      { productID: 2, quantity: 1 },
      { productID: 4, quantity: 1 },
    ],

    shipmentDate: new Date(2020, 6, 9),
  },
  {
    accountNumber: 1,
    trackingNumber: 2,
    shippingAddress: "123 Testdata St.",
    city: "Minneapolis",
    state: "Minnesota",
    country: "US",
    zipOrPostalCode: "44592",

    products: [{ productID: 3, quantity: 1 }],

    shipmentDate: new Date(2020, 7, 4),
  },
  {
    accountNumber: 2,
    trackingNumber: 3,
    shippingAddress: "123 Realdata Ct.",
    city: "Nashville",
    state: "Tennessee",
    country: "US",
    zipOrPostalCode: "31245",

    products: [
      { productID: 2, quantity: 1 },
      { productID: 3, quantity: 4 },
    ],

    shipmentDate: new Date(2020, 9, 29),
  },
];
