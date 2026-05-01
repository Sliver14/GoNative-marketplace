import { ok } from "@/lib/api-response";
import { withValidatedBody } from "@/lib/route-handler";
import { authService } from "@/server/modules/auth/auth.service";
import { loginSchema } from "@/server/modules/auth/auth.schemas";

export const POST = withValidatedBody(loginSchema, async ({ body }) => {
  const result = authService.login(body);
  return ok(result);
});
