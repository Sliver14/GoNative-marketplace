import { randomUUID } from "crypto";

import { products } from "@/server/store/data";

import type { CreateProductInput } from "./products.schemas";

export const productsService = {
  list() {
    return products;
  },

  create(input: CreateProductInput) {
    const product = {
      id: randomUUID(),
      ...input,
      createdAt: new Date().toISOString(),
    };
    products.push(product);
    return product;
  },
};
