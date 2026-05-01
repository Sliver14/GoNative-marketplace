import { createHash, randomUUID } from "crypto";

import type { OrderRecord, ProductRecord, UserRecord } from "@/server/types";

function hashPassword(raw: string) {
  return createHash("sha256").update(raw).digest("hex");
}

const now = new Date().toISOString();

export const users: UserRecord[] = [
  {
    id: randomUUID(),
    fullName: "Admin User",
    email: "admin@seafood.test",
    role: "ADMIN",
    passwordHash: hashPassword("admin1234"),
    createdAt: now,
  },
  {
    id: randomUUID(),
    fullName: "Customer User",
    email: "customer@seafood.test",
    role: "CUSTOMER",
    passwordHash: hashPassword("customer1234"),
    createdAt: now,
  },
];

export const products: ProductRecord[] = [
  {
    id: randomUUID(),
    name: "Atlantic Salmon",
    description: "Fresh whole salmon sourced daily.",
    category: "FISH",
    unit: "kg",
    price: 24.5,
    stock: 80,
    createdAt: now,
  },
  {
    id: randomUUID(),
    name: "Tiger Prawns",
    description: "Large tiger prawns, cleaned and chilled.",
    category: "CRUSTACEAN",
    unit: "kg",
    price: 31.25,
    stock: 45,
    createdAt: now,
  },
];

export const orders: OrderRecord[] = [];

export const cryptoUtils = {
  hashPassword,
};
