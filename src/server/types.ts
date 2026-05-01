export type UserRole = "ADMIN" | "SELLER" | "CUSTOMER";
export type ProductCategory = "FISH" | "SHELLFISH" | "CRUSTACEAN" | "OTHER";
export type OrderStatus =
  | "PENDING"
  | "PAID"
  | "PROCESSING"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED";

export type UserRecord = {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  passwordHash: string;
  createdAt: string;
};

export type ProductRecord = {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  unit: string;
  price: number;
  stock: number;
  imageUrl?: string;
  createdAt: string;
};

export type OrderItemRecord = {
  productId: string;
  quantity: number;
  price: number;
};

export type OrderRecord = {
  id: string;
  userId: string;
  items: OrderItemRecord[];
  total: number;
  status: OrderStatus;
  notes?: string;
  createdAt: string;
};
