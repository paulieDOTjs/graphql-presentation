import axios from "axios";

import {
  shipByTrackingArgs,
  prodByIDArgs,
  providedRootCustomer,
  rootShipment,
} from "./schema";

export const resolvers = {
  Query: {
    shipByTracking: async (_root: any, args: shipByTrackingArgs) => {
      try {
        return await getShipments("trackingNumber", args.trackingNumber);
      } catch (err) {
        throw err;
      }
    },

    prodByID: async (_root: any, args: prodByIDArgs) => {
      try {
        return await getProds("productID", args.productID);
      } catch (err) {
        throw err;
      }
    },
  },

  Shipment: {
    contents: async (root: rootShipment) => {
      try {
        return await getProds("trackingNumber", root.trackingNumber);
      } catch (err) {
        throw err;
      }
    },
  },

  Customer: {
    orderHistory: async (root: providedRootCustomer) => {
      try {
        return getProds("accountNumber", root.accountNumber);
      } catch (err) {
        throw err;
      }
    },

    orderTracking: async (root: providedRootCustomer) => {
      try {
        return await getShipments("accountNumber", root.accountNumber);
      } catch (err) {
        throw err;
      }
    },
  },
};

const getShipments = async (field: string, value: number | string) => {
  try {
    const axiosCall = await axios.get(
      `http://localhost:5003/api/shipments/${field}/${value}`
    );
    console.log("Product service hit!");
    console.log(
      "--------------------------------------------------------------------------"
    );
    console.log(axiosCall.data);
    console.log(
      "--------------------------------------------------------------------------"
    );
    return axiosCall.data;
  } catch (err) {
    console.error(err);
    throw Error("Error connecting to external server");
  }
};

const getProds = async (field: string, value: number | string) => {
  try {
    const axiosCall = await axios.get(
      `http://localhost:5003/api/products/${field}/${value}`
    );
    console.log("Product service hit!");
    console.log(
      "--------------------------------------------------------------------------"
    );
    console.log(axiosCall.data);
    console.log(
      "--------------------------------------------------------------------------"
    );
    return axiosCall.data;
  } catch (err) {
    console.error(err);
    throw Error("Error connecting to external server");
  }
};
