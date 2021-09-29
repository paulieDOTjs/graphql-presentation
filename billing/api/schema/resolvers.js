import fs from "fs";

const { invoices } = JSON.parse(fs.readFileSync("./invoices.json"));

export const resolvers = {
  Query: {
    invoiceByNum: async (_root, args) => {
      const foundInv = invoices.filter(
        (invoice) => invoice.invoiceNumber === args.invoiceNum
      );

      if (foundInv.length === 1) {
        return foundInv[0];
      } else {
        console.error("Filter did not filter right", { foundInv });
        throw new Error("Internal server error. Paul goofed.");
      }
    },
  },
  Customer: {
    invoices: async (root) => {
      return invoices.filter(
        (invoice) => invoice.accountNumber === root.accountNumber
      );
    },
    outstandingBalance: async (root) => {
      const foundInvs = invoices.filter(
        (invoice) => invoice.accountNumber === root.accountNumber
      );

      return (
        Math.round(
          foundInvs
            .map((singInv) => singInv?.amount - singInv?.paid)
            .reduce((prev, curr) => prev + curr, 0) * 100
        ) / 100
      );
    },
  },
};
