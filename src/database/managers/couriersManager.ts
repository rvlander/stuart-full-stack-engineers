import { AppDataSource } from "../dataSource";
import { Courier } from "../entity/Courier";
import { MoreThanOrEqual } from "typeorm";

const courierRepository = AppDataSource.getRepository(Courier);

export async function upsert(
  id: number,
  maxCapacity: number
): Promise<Courier> {
  const courier = new Courier();
  courier.id = id;
  courier.max_capacity = maxCapacity;

  await courierRepository.save(courier);
  return courier;
}

export async function remove(id: number): Promise<void> {
  await courierRepository.delete(id);
}

export async function lookup(requiredCapacity: number): Promise<Courier[]> {
  const couriers = await courierRepository.findBy({
    max_capacity: MoreThanOrEqual(requiredCapacity),
  });
  return couriers;
}

export async function get(id: number): Promise<Courier | null> {
  const courier = await courierRepository.findOne({
    where: { id },
  });
  return courier;
}
