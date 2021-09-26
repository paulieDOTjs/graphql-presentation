import fs from "fs";

const { invoices } = JSON.parse(fs.readFileSync("./invoices.json"));

export const resolvers = {
  Query: {
    invoiceByNum: async (_root, args) => {
      const foundInv = invoices.filter(
        (invoice) => invoice.invoiceNumber === args.invoiceNum
      );

      if (foundInv.length === 1) {
      } else {
        console.error("Filter did not filter right", { foundInv });
        throw new Error("Internal server error. Paul goofed.");
      }
    },
  },
};
