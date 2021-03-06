import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    invoiceByNum(invoiceNum: Int): Invoice
  }

  type Invoice @key(fields: "invoiceNumber accountNumber") {
    invoiceNumber: Int!
    accountNumber: Int!
    date: String
    amount: Float
    paid: Float
    paymentMethod: PAYMENT_METHOD
  }

  enum PAYMENT_METHOD {
    CREDIT
    WIRE_TRANSFER
    DIRECT_DEPOSIT
  }

  extend type Customer @key(fields: "accountNumber") {
    accountNumber: Int! @external

    outstandingBalance: Float
    invoices: [Invoice]
  }
`;
