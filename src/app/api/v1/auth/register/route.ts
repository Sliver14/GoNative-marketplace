import { ok } from "@/lib/api-response";
import { withValidatedBody } from "@/lib/route-handler";
import { authService } from "@/server/modules/auth/auth.service";
import { registerSchema } from "@/server/modules/auth/auth.schemas";

export const POST = withValidatedBody(registerSchema, async ({ body }) => {
  const result = authService.register(body);
  return ok(result, 201);
});
