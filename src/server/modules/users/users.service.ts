import { users } from "@/server/store/data";

export const usersService = {
  list() {
    return users.map((user) => ({
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
    }));
  },
};
