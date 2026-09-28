import { OrderItem, type OrderItemArgs } from './order-item.model.ts';

export default class CosmoprofOrderItem extends OrderItem {
  constructor(args: OrderItemArgs) {
    super(args);
  }
}
