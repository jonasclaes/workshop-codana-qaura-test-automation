import { BaseService } from "../base.service";

export class PetsService extends BaseService {
  getAll(token: string) {
    return this.request.get("/api/collections/pets/records", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
