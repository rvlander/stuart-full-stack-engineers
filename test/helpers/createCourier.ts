import { Courier } from "api/couriers/couriers";
import _ from "lodash";

export const createCourier = (courier: Partial<Courier> = {}): Courier => ({
  id: Math.round(Math.random() * 100) + 1,
  max_capacity: Math.round(Math.random() * 100),
  ...courier,
});

export const createNCouriers = (n: number): Courier[] => {
  return _.range(n).map((id) =>
    createCourier({
      id: id + 1,
    })
  );
};
