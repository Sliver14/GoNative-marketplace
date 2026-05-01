import { ok } from "@/lib/api-response";
import { withValidatedBody } from "@/lib/route-handler";
import { createProductSchema } from "@/server/modules/products/products.schemas";
import { productsService } from "@/server/modules/products/products.service";

export async function GET() {
  return ok(productsService.list());
}

export const POST = withValidatedBody(createProductSchema, async ({ body }) => {
  const created = productsService.create(body);
  return ok(created, 201);
});
