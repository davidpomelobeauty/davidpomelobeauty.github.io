import { toDecimal, type Dinero } from 'dinero.js';

export interface OrderItemArgs {
  brandName: string;
  name: string;
  variantName?: string;
  quantity: number;
  price: Dinero<number>;
  size?: string;
}

export abstract class OrderItem {
  brandName: string;
  name: string;
  variantName?: string;
  quantity: number;
  protected _price: Dinero<number>;
  size?: string;

  constructor(args: OrderItemArgs) {
    this.brandName = args.brandName;
    this.name = args.name;
    this.variantName = args.variantName;
    this.quantity = args.quantity;
    this._price = args.price;
    this.size = args.size;
  }

  get price(): Dinero<number> {
    return this._price;
  }

  get priceStr() {
    return toDecimal(this._price);
  }

  get priceNum() {
    return Number(toDecimal(this._price));
  }
}
