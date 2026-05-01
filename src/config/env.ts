type EnvConfig = {
  nodeEnv: string;
  apiVersion: string;
  supportEmail: string;
  databaseUrl: string;
  jwtSecret: string;
};

function getRequired(name: string, fallback?: string) {
  const value = process.env[name] ?? fallback;
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const env: EnvConfig = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  apiVersion: process.env.API_VERSION ?? "v1",
  supportEmail: process.env.SUPPORT_EMAIL ?? "support@example.com",
  databaseUrl: getRequired(
    "DATABASE_URL",
    "postgresql://postgres:postgres@localhost:5432/seafood_marketplace"
  ),
  jwtSecret: getRequired("JWT_SECRET", "dev-only-secret"),
};
