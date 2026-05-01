import { randomUUID } from "crypto";

import { HttpError } from "@/lib/http-error";
import { orders, products, users } from "@/server/store/data";

import type { CreateOrderInput } from "./orders.schemas";

export const ordersService = {
  list() {
    return orders;
  },

  create(input: CreateOrderInput) {
    const user = users.find((item) => item.id === input.userId);
    if (!user) {
      throw new HttpError(404, "User not found");
    }

    const normalizedItems = input.items.map((item) => {
      const product = products.find((prod) => prod.id === item.productId);
      if (!product) {
        throw new HttpError(404, `Product not found: ${item.productId}`);
      }
      if (product.stock < item.quantity) {
        throw new HttpError(400, `Insufficient stock for ${product.name}`);
      }

      product.stock -= item.quantity;
      return {
        productId: product.id,
        quantity: item.quantity,
        price: product.price,
      };
    });

    const total = normalizedItems.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );

    const order = {
      id: randomUUID(),
      userId: input.userId,
      items: normalizedItems,
      total,
      status: "PENDING" as const,
      notes: input.notes,
      createdAt: new Date().toISOString(),
    };
    orders.push(order);
    return order;
  },
};
