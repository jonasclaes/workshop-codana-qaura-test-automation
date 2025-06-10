import { BaseService } from "../base.service";

export class AuthService extends BaseService {
  authenticateWithPassword(identity: string, password: string) {
    return this.request.post("/api/collections/users/auth-with-password", {
      data: {
        identity,
        password,
      },
    });
  }
}
