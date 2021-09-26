import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    getCustByNum(acctNum: Int): Customer
    getCustByUsername(username: String): Customer
    getAllCustomers: [Customer]
    me: Customer
  }

  type Customer {
    accountNumber: Int!

    username: String
    password: String
  }
`;
