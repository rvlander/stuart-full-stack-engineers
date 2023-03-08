import { Courier } from "./couriers"

import * as couriersManager from "../../database/managers/couriersManager"

export class CouriersService {
    public async upsert(id: number, max_capacity: number): Promise<Courier> {
        const courier = await couriersManager.upsert(id, max_capacity)
        return {
            id, max_capacity: courier.maxCapacity
        }
    }

    public async delete(id: number): Promise<void> {
        await couriersManager.remove(id)
    }
}