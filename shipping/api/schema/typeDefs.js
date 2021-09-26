import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    shipByTracking(trackingNumber: Int): Shipment
    prodByID(productID: Int): Product
  }

  type Shipment {
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

  type Product {
    productID: Int

    name: String
    description: String

    size: [Float]
    weight: Float
  }
`;
