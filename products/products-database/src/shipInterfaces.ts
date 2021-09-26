export interface shipment {
  accountNumber: number;
  trackingNumber: number;

  shippingAddress: string;
  city: string;
  state: string;
  zipOrPostalCode: string;
  country: string;

  products: productAndQuantity[];
  shipmentDate?: Date;
}

interface productAndQuantity {
  productID: number;
  quantity: number;
}

export interface product {
  productID: number;
  name: string;

  size: [number, number, number];
  weight: number;

  description?: string;
}
