import { ok } from "@/lib/api-response";
import { withValidatedBody } from "@/lib/route-handler";
import { createOrderSchema } from "@/server/modules/orders/orders.schemas";
import { ordersService } from "@/server/modules/orders/orders.service";

export async function GET() {
  return ok(ordersService.list());
}

export const POST = withValidatedBody(createOrderSchema, async ({ body }) => {
  const created = ordersService.create(body);
  return ok(created, 201);
});
