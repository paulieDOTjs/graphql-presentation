import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    getCustByNum(acctNum: Int): Customer
    getCustByUsername(username: String): Customer
    getAllCustomers: [Customer]
    me: Customer
  }

  type Customer @key(fields: "accountNumber") {
    accountNumber: Int!

    username: String
    password: String
  }

  extend type Shipment @key(fields: "trackingNumber accountNumber") {
    trackingNumber: Int! @external
    accountNumber: Int! @external

    recipient: Customer
  }

  extend type Invoice @key(fields: "invoiceNumber accountNumber") {
    invoiceNumber: Int! @external
    accountNumber: Int! @external

    billTo: Customer
  }
`;
