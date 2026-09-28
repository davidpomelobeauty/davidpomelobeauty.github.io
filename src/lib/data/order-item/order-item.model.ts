export interface OrderItemArgs {
  name: string;
  brandName: string;
  quantity: number;
  price: number;
  size?: string;
}
export abstract class OrderItem {
  name: string;
  brandName: string;
  quantity: number;
  price: number;
  size?: string;

  constructor(args: OrderItemArgs) {
    this.name = args.name;
    this.brandName = args.brandName;
    this.quantity = args.quantity;
    this.price = args.price;
    this.size = args.size;
  }

  get priceStr() {
    const totalPrice = this.price * this.quantity;
    const s = totalPrice.toString().padStart(3, '0');
    return s.slice(0, -2) + '.' + s.slice(-2);
  }
}
