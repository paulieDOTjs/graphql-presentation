import fs from "fs";

const { customers } = JSON.parse(fs.readFileSync("./customers.json"));

export const resolvers = {
  Query: {
    getCustByNum: (_root, args) => {
      console.log(customers);
      return checkIfOnlyOne(
        customers.filter((acct) => acct.accountNumber === args.acctNum)
      );
    },
    getCustByUsername: (_root, args) =>
      checkIfOnlyOne(
        customers.filter((acct) => acct.username === args.username)
      ),
    me: () =>
      checkIfOnlyOne(customers.filter((acct) => acct.accountNumber === 1)),

    Shipment: {
      recipient: (root) =>
        checkIfOnlyOne(
          customers.filter((acct) => acct.accountNumber === root.accountNumber)
        ),

      Invoice: {
        billTo: (root) =>
          checkIfOnlyOne(
            customers.filter(
              (acct) => acct.accountNumber === root.accountNumber
            )
          ),
      },
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
