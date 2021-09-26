import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    shipByTracking(trackingNumber: Int): Shipment
    prodByID(productID: Int): Product
  }

  type Shipment @key(fields: "trackingNumber accountNumber") {
    accountNumber: Int!
    trackingNumber: Int!

    shippingAddress: String
    city: String
    state: String
    zipOrPostalCode: String
    country: String

    shipmentDate: String
    contents: [Product]
  }

  type Product @key(fields: "productID") {
    productID: Int

    name: String
    description: String

    size: [Float]
    weight: Float
  }

  extend type Customer @key(fields: "accountNumber") {
    accountNumber: Int! @external
    orderHistory: [Product]
    orderTracking: [Shipment]
  }
`;

export interface providedRootCustomer {
  accountNumber: number;
}

export interface rootShipment {
  trackingNumber: number;
}

export interface shipByTrackingArgs {
  trackingNumber: number;
}

export interface prodByIDArgs {
  productID: number;
}
