import { ZodSchema } from "zod";

import { fail } from "@/lib/api-response";
import { HttpError } from "@/lib/http-error";

type HandlerContext<T> = {
  body: T;
  request: Request;
};

export function withValidatedBody<T>(
  schema: ZodSchema<T>,
  handler: (ctx: HandlerContext<T>) => Promise<Response>
) {
  return async (request: Request) => {
    try {
      const raw = await request.json();
      const body = schema.parse(raw);
      return await handler({ body, request });
    } catch (error) {
      if (error instanceof HttpError) {
        return fail(error.message, error.statusCode, error.details);
      }

      if (error instanceof Error && "issues" in error) {
        return fail("Validation failed", 422, error);
      }

      return fail("Unexpected server error", 500);
    }
  };
}
