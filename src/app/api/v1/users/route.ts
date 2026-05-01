import { ok } from "@/lib/api-response";
import { usersService } from "@/server/modules/users/users.service";

export async function GET() {
  return ok(usersService.list());
}
