import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(5),
  category: z.enum(["FISH", "SHELLFISH", "CRUSTACEAN", "OTHER"]),
  unit: z.string().min(1),
  price: z.number().positive(),
  stock: z.number().int().nonnegative(),
  imageUrl: z.string().url().optional(),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;
