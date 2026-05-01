import { env } from "@/config/env";
import { ok } from "@/lib/api-response";

export async function GET() {
  return ok({
    status: "ok",
    apiVersion: env.apiVersion,
    service: "seafood-marketplace-backend",
    timestamp: new Date().toISOString(),
  });
}
