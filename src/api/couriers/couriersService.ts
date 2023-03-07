import { Courier } from "./couriers"

export class CouriersService {
    public upsert(id: number, max_capacity: number): Courier {
        return {
            id, max_capacity
        }
    }

    public delete(id: number) {
        return;
    }
}