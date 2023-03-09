import { Courier } from "./couriers";

import * as couriersManager from "../../database/managers/couriersManager";
import { NotFoundError } from "../../api/utils";

export class CouriersService {
  public async upsert(
    id: number,
    max_capacity: number
  ): Promise<[Courier, "created" | "updated"]> {
    const exists = !!(await couriersManager.get(id));
    const courier = await couriersManager.upsert(id, max_capacity);
    return [courier, exists ? "updated" : "created"];
  }

  public async delete(id: number): Promise<void> {
    const exists = !!(await couriersManager.get(id));
    if (!exists) {
      throw new NotFoundError();
    }
    await couriersManager.remove(id);
  }

  public async lookup(requiredCapacity: number): Promise<Courier[]> {
    const couriers = await couriersManager.lookup(requiredCapacity);
    return couriers;
  }
}
