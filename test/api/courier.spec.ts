import initialize, { destroy, clearAll } from "database/initialize";
import { request } from "../helpers/app";
import { createCourier, createNCouriers } from "../helpers/createCourier";
import _ from "lodash";

beforeAll(() => initialize());
afterAll(() => destroy());

beforeEach(() => clearAll());

describe("Couriers", () => {
  describe("PUT /couriers", () => {
    it("should respond 201 and return the newly courier with capacity", async () => {
      const newCourier = createCourier();
      const response = await request.put("/couriers").send(newCourier);

      expect(response.statusCode).toEqual(201);
      expect(response.body).toEqual(newCourier);
    });

    it("should respond with 200 update courrier with new capacity", async () => {
      const newCourier = createCourier();
      await request.put("/couriers").send(newCourier);

      const updatedCourier = createCourier({ id: newCourier.id });
      const response = await request.put("/couriers").send(updatedCourier);

      expect(response.statusCode).toEqual(200);
      expect(response.body).toEqual(updatedCourier);
    });

    it("should fail with 422 on validation error (id can't be 0)", async () => {
      const newCourier = createCourier({ id: 0 });
      const response = await request.put("/couriers").send(newCourier);

      expect(response.statusCode).toEqual(422);
      expect(response.body).toEqual(
        expect.objectContaining({ message: "Validation Failed" })
      );
    });

    it("should fail with 422 on validation error (max_capacity must be positive)", async () => {
      const newCourier = createCourier({ max_capacity: -3 });
      const response = await request.put("/couriers").send(newCourier);

      expect(response.statusCode).toEqual(422);
      expect(response.body).toEqual(
        expect.objectContaining({ message: "Validation Failed" })
      );
    });
  });

  describe("DELETE /couriers", () => {
    it("should respond with 204 status and have no content", async () => {
      const courrierToDelete = createCourier();
      await request.put("/couriers").send(courrierToDelete);

      const response = await request.delete(`/couriers/${courrierToDelete.id}`);

      expect(response.statusCode).toEqual(204);
      expect(response.body).toEqual({});
    });

    it("should repond with 404 not found", async () => {
      const notFoundCourier = createCourier();
      const response = await request.delete(`/couriers/${notFoundCourier.id}`);

      expect(response.statusCode).toEqual(404);
      expect(response.body).toEqual({});
    });

    it("should fail with 422 on validation error (id must be positive integer)", async () => {
      const response = await request.delete(`/couriers/foo`);

      expect(response.statusCode).toEqual(422);
      expect(response.body).toEqual(
        expect.objectContaining({ message: "Validation Failed" })
      );
    });

    it("should fail with 422 on validation error (id must be positive integer)", async () => {
      const response = await request.delete(`/couriers/1.5`);

      expect(response.statusCode).toEqual(422);
      expect(response.body).toEqual(
        expect.objectContaining({ message: "Validation Failed" })
      );
    });
  });

  describe("GET /couriers/lookup", () => {
    it("should respond with 200 and returns valid couriers (whose capacity is <= the requested capacity)", async () => {
      const couriers = createNCouriers(10);
      await Promise.all(
        couriers.map((courier) => request.put(`/couriers`).send(courier))
      );

      const sortedCouriers = _.sortBy(couriers, "max_capacity");
      const response = await request.get("/couriers/lookup").query({
        required_capacity: sortedCouriers[7].max_capacity,
      });

      expect(response.statusCode).toEqual(200);
      expect(response.body).toHaveLength(3);

      expect(_.sortBy(response.body, "id")).toEqual(
        _.sortBy(sortedCouriers.slice(7), "id")
      );
    });

    it("should fail with 422 on validation error (required_capacity must be a integer)", async () => {
      const response = await request.get("/couriers/lookup").query({
        required_capacity: "foo",
      });

      expect(response.statusCode).toEqual(422);
      expect(response.body).toEqual(
        expect.objectContaining({ message: "Validation Failed" })
      );
    });
  });
});
