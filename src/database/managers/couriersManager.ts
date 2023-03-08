
import { AppDataSource } from "../dataSource"
import { Courier } from "../entity/Courier"


const courierRepository = AppDataSource.getRepository(Courier)

export async function upsert(id: number, maxCapacity: number): Promise<Courier> {
    const courier = new Courier()   
    courier.id = id
    courier.maxCapacity = maxCapacity
    
    await courierRepository.save(courier)
    return courier
}

export async function remove(id: number): Promise<void> {   
    await courierRepository.delete(id)
}