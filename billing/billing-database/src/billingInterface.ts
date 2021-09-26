export interface billing {
  accountNumber: number;
  invoiceNumber: number;

  date: Date;
  amount: number;
  paid: number;

  paymentMethod: PAYMENT_METHOD;
}

export enum PAYMENT_METHOD {
  CREDIT = "CREDIT",
  WIRE_TRANSFER = "WIRE_TRANSFER",
  DIRECT_DEPOSIT = "DIRECT_DEPOSIT",
}
