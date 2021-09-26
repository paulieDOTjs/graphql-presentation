import axios from "axios";

import { getInvoiceByNumArgs, providedRootCustomer } from "./schema";

export const resolvers = {
  Query: {
    invoicesByNum: async (_root: any, args: getInvoiceByNumArgs) => {
      try {
        return await getInvoices("invoiceNumber", args.invoiceNum);
      } catch (err) {
        throw err;
      }
    },
  },
  Customer: {
    invoices: async (root: providedRootCustomer) => {
      try {
        return await getInvoices("accountNumber", root.accountNumber);
      } catch (err) {
        throw err;
      }
    },
    outstandingBalance: async (root: providedRootCustomer) => {
      try {
        const invoices = await getInvoices("accountNumber", root.accountNumber);

        return (
          Math.round(
            invoices
              .map((singInv: any) => singInv?.amount - singInv?.paid)
              .reduce((prev: number, curr: number) => prev + curr, 0) * 100
          ) / 100
        );
      } catch (err) {
        throw err;
      }
    },
  },
};

const getInvoices = async (field: string, value: number | string) => {
  try {
    const axiosCall = await axios.get(
      `http://localhost:5002/api/${field}/${value}`
    );
    console.log("Billing service hit!");
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
