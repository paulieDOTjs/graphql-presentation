export interface Account {
  username: string;
  password: string;
  accountNumber: number;
  createDate: Date;
}

export interface accountParams {
  field: acctFields;
  value: string | number;
}

enum acctFields {
  USERNAME = "username",
  PASSWORD = "password",
  ACCOUNT_NUMBER = "accountNumber",
  CREATE_DATE = "createDate",
}
