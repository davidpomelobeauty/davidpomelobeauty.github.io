export default class Item {
  static fromString(chunkStr: string, index: number) {
    alert(chunkStr);
  }

  constructor(
    public name: string,
    public brandName: string,
    public quantity: number,
    public price: number,
    public size?: string,
  ) {}

  get priceStr() {
    const totalPrice = this.price * this.quantity;
    const s = totalPrice.toString().padStart(3, '0');
    return s.slice(0, -2) + '.' + s.slice(-2);
  }
}
