import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    getCustByNum(acctNum: Int): Customer
    getCustByusername(username: String): Customer
    me: Customer
  }

  type Customer @key(fields: "accountNumber") {
    accountNumber: Int!

    username: String
    password: String
    createDate: String
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

export interface rootShipment {
  trackingNumber: number;
  accountNumber: number;
}

export interface rootInvoice {
  invoiceNumber: number;
  accountNumber: number;
}

export interface getCustByNumArgs {
  acctNum: number;
}

export interface getCustByusernameArgs {
  username: string;
}
