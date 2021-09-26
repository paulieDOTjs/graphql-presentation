import {
  getCustByNumArgs,
  getCustByusernameArgs,
  rootInvoice,
  rootShipment,
} from "./schema";

import { GraphQLSchemaModule } from "apollo-server";
import axios from "axios";

export const resolvers = {
  Query: {
    getCustByNum: async (_root: any, args: getCustByNumArgs) => {
      try {
        return await getAccount("accountNumber", args.acctNum);
      } catch (err) {
        throw err;
      }
    },
    getAccountByNumber: async (_root: any, args: getCustByusernameArgs) => {
      try {
        return await getAccount("username", args.username);
      } catch (err) {
        throw err;
      }
    },
    me: async () => {
      try {
        return await getAccount("accountNumber", 1);
      } catch (err) {
        throw err;
      }
    },
  },

  Shipment: {
    recipient: async (root: rootShipment) => {
      try {
        return await getAccount("accountNumber", root.accountNumber);
      } catch (err) {
        throw err;
      }
    },
  },

  Invoice: {
    billTo: async (root: rootInvoice) => {
      try {
        return await getAccount("accountNumber", root.invoiceNumber);
      } catch (err) {
        throw err;
      }
    },
  },
};

const getAccount = async (field: string, value: number | string) => {
  try {
    const axiosCall = await axios.get(
      `http://localhost:5001/api/${field}/${value}`
    );
    console.log("Accounts service hit!");
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
