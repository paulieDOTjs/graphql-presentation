import { PAYMENT_METHOD, billing } from "./billingInterface";

export const invoices: billing[] = [
  {
    accountNumber: 1,
    invoiceNumber: 1,
    date: new Date(2020, 9, 23),
    amount: 2176.19,
    paid: 1483.01,
    paymentMethod: PAYMENT_METHOD.WIRE_TRANSFER,
  },
  {
    accountNumber: 1,
    invoiceNumber: 2,
    date: new Date(2020, 10, 6),
    amount: 289.91,
    paid: 289.91,
    paymentMethod: PAYMENT_METHOD.WIRE_TRANSFER,
  },
  {
    accountNumber: 2,
    invoiceNumber: 3,
    date: new Date(2020, 12, 1),
    amount: 9843.94,
    paid: 8909.92,
    paymentMethod: PAYMENT_METHOD.CREDIT,
  },
  {
    accountNumber: 1,
    invoiceNumber: 4,
    date: new Date(),
    amount: 2139.12,
    paid: 1029.48,
    paymentMethod: PAYMENT_METHOD.DIRECT_DEPOSIT,
  },
  {
    accountNumber: 3,
    invoiceNumber: 5,
    date: new Date(),
    amount: 1292.82,
    paid: 1244.02,
    paymentMethod: PAYMENT_METHOD.WIRE_TRANSFER,
  },
];
