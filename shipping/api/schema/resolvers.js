import fs from "fs";

const { shipments } = JSON.parse(fs.readFileSync("./shipments.json"));
const { products } = JSON.parse(fs.readFileSync("./products.json"));

export const resolvers = {
  Query: {
    shipByTracking: async (_root, args) =>
      checkIfOnlyOne(
        shipments.filter(
          (shpmnt) => shpmnt.trackingNumber === args.trackingNumber
        )
      ),

    prodByID: async (_root, args) =>
      checkIfOnlyOne(
        products.filter((prdct) => prdct.productID === args.productID)
      ),
  },

  Shipment: {
    contents: async (root) => {
      const prodIDs = root.products.map((prdct) => prdct.productID);
      return products.filter((prdct) => prodIDs.includes(prdct.productID));
    },
  },
};

function checkIfOnlyOne(arr) {
  if (arr instanceof Array && arr.length === 1) {
    return arr[0];
  } else {
    console.error("Filter did not filter right", { arr });
    throw new Error("Internal server error. Paul goofed.");
  }
}
