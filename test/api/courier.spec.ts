import { create } from "domain"
import initialize, { destroy } from "../../src/database/initialize"
import { request } from "../helpers/app"
import { createCourier } from "../helpers/createCourier"

beforeAll(() => initialize())
afterAll(() => destroy())

describe("Couriers", () => {
    describe('POST /couriers', () => {
        const newCourier = createCourier()

        it("should respond 201 and return the newly courier with capacity", async () => {      
            const response = await request.post('/couriers').send(newCourier)

            expect(response.statusCode).toEqual(201)
            expect(response.body).toEqual(newCourier)
        })

        // TODO: make updates cleaner
        it("should respond with 200 update courrier with new capacity", async () => {
            const updatedCourrier = createCourier({id: newCourier.id})

            const response = await request.post('/couriers').send(updatedCourrier)

            expect(response.statusCode).toEqual(201)
            expect(response.body).toEqual(updatedCourrier)    
        })
    })

    describe('DELETE /couriers', () => {
        const courrierToDelete = createCourier()

        it("should respond 201 and return the newly courier with capacity", async () => {      
            const response = await request.post('/couriers').send(courrierToDelete)

            expect(response.statusCode).toEqual(201)
            expect(response.body).toEqual(courrierToDelete)
        })

        it("should respond with 204 status and have no content", async () => {
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
})