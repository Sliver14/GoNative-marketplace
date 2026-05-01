import { createHash, randomUUID } from "crypto";

import { HttpError } from "@/lib/http-error";
import { cryptoUtils, users } from "@/server/store/data";
import type { UserRole } from "@/server/types";

import type { LoginInput, RegisterInput } from "./auth.schemas";

type AuthResponse = {
  user: {
    id: string;
    fullName: string;
    email: string;
    role: UserRole;
  };
  accessToken: string;
};

function toAuthResponse(user: (typeof users)[number]): AuthResponse {
  const payload = `${user.id}:${Date.now()}:${Math.random()}`;
  return {
    user: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    },
    accessToken: Buffer.from(payload).toString("base64url"),
  };
}

export const authService = {
  register(input: RegisterInput) {
    const existing = users.find((item) => item.email === input.email.toLowerCase());
    if (existing) {
      throw new HttpError(409, "Email already exists");
    }

    const user = {
      id: randomUUID(),
      fullName: input.fullName,
      email: input.email.toLowerCase(),
      role: "CUSTOMER" as const,
      passwordHash: cryptoUtils.hashPassword(input.password),
      createdAt: new Date().toISOString(),
    };

    users.push(user);
    return toAuthResponse(user);
  },

  login(input: LoginInput) {
    const email = input.email.toLowerCase();
    const user = users.find((item) => item.email === email);
    if (!user) {
      throw new HttpError(401, "Invalid credentials");
    }

    const incomingHash = createHash("sha256").update(input.password).digest("hex");
    if (incomingHash !== user.passwordHash) {
      throw new HttpError(401, "Invalid credentials");
    }

    return toAuthResponse(user);
  },
};
