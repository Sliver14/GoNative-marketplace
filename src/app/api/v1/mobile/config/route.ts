import { env } from "@/config/env";
import { ok } from "@/lib/api-response";

export async function GET() {
  return ok({
    apiVersion: env.apiVersion,
    environment: env.nodeEnv,
    appName: "Seafood Marketplace",
    supportEmail: env.supportEmail,
  });
}
