import initialize, { destroy, clearAll } from "../../src/database/initialize"
import { request } from "../helpers/app"
import { createCourier, createNCouriers } from "../helpers/createCourier"
import _ from "lodash"

beforeAll(() => initialize())
afterAll(() => destroy())

beforeEach(() => clearAll())

describe("Couriers", () => {
    describe('POST /couriers', () => {
        it("should respond 201 and return the newly courier with capacity", async () => {      
            const newCourier = createCourier()
            const response = await request.post('/couriers').send(newCourier)

            expect(response.statusCode).toEqual(201)
            expect(response.body).toEqual(newCourier)
        })

        // TODO: make updates cleaner
        it("should respond with 200 update courrier with new capacity", async () => {
            const newCourier = createCourier()
            await request.post('/couriers').send(newCourier)

            const updatedCourrier = createCourier({id: newCourier.id})
            const response = await request.post('/couriers').send(updatedCourrier)

            expect(response.statusCode).toEqual(201)
            expect(response.body).toEqual(updatedCourrier)    
        })
    })

    describe('DELETE /couriers', () => {
        it("should respond with 204 status and have no content", async () => {
            const courrierToDelete = createCourier()
            await request.post('/couriers').send(courrierToDelete)

            const response = await request.delete(`/couriers/${courrierToDelete.id}`)
            
            expect(response.statusCode).toEqual(204)
            expect(response.body).toEqual({})
        })

        it("should repond with 404 not found", async () => {
            const notFoundCourier = createCourier();
            const response = await request.delete(`/couriers/${notFoundCourier.id}`)

            expect(response.statusCode).toEqual(204)
            expect(response.body).toEqual({})
        })

    })

    describe('GET /couriers/lookup', () => {
        it('should respond with 200 and returns valid couriers (whose capaciy is <= the requested capacity)', async () => {
            const couriers = createNCouriers(10)
            await Promise.all(couriers.map(courier => request.post(`/couriers`).send(courier)))

            const sortedCouriers = _.sortBy(couriers, "max_capacity")
            const response = await request.get('/courriers/lookup').send({
                capacity_required: sortedCouriers[7].max_capacity
            })

            expect(response.statusCode).toEqual(200)
            expect(response.body).toHaveLength(8)
            expect(_.sortBy(response.body, "max_capacity")).toEqual(sortedCouriers.slice(7))
        })
    })
})