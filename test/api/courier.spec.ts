import initialize, { destroy } from "../../src/database/initialize"
import { request } from "../helpers/app"
import { createCourier } from "../helpers/createCourier"

beforeAll(() => initialize())
afterAll(() => destroy())

describe("Couriers", () => {
    describe('POST /couriers', () => {
        it("should create a new courier with capacity", async () => {
            const newCourier = createCourier()

            const response = await request.post('/couriers').send(newCourier)

            expect(response.statusCode).toEqual(201)
            expect(response.body).toEqual(newCourier)
        })
    })
})