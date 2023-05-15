/*
    Represents a customer order.
*/
export type Order = {
    // a unique identifier representing this order
    orderId?: string;

    // the cart identifier
    cartId: string;

    // the order name
    name: number;

    // the credit card number
    creditCard: string;

    // where to ship the order to
    shippingAddress: string;

    // the date the order was created
    createdAt: Date;
}
