import { Courier } from "../../src/api/couriers/couriers";

export const createCourier = (article: Partial<Courier> = {}): Courier => ({
  id: Math.round(Math.random()*100),
  max_capacity: Math.round(Math.random()*100),
});