import fs from "fs";

const { accounts } = JSON.parse(fs.readFileSync("./data.json"));

export const resolvers = {
  Query: {
    getCustByNum: (_root, args) =>
      checkIfOnlyOne(
        accounts.filter((acct) => acct.accountNumber === args.acctNum)
      ),
    getCustByUsername: (_root, args) =>
      checkIfOnlyOne(
        accounts.filter((acct) => acct.username === args.username)
      ),
    me: () =>
      checkIfOnlyOne(accounts.filter((acct) => acct.accountNumber === 1)),

    Shipment: {
      recipient: (root) =>
        checkIfOnlyOne(
          accounts.filter((acct) => acct.accountNumber === root.accountNumber)
        ),

      Invoice: {
        billTo: (root) =>
          checkIfOnlyOne(
            accounts.filter((acct) => acct.accountNumber === root.accountNumber)
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
