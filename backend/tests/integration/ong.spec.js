const request = require('supertest');
const app = require('../../src/app')
const connection = require('../../src/database/connection')
describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.latest();

    })
    afterAll(async () => {
        await connection.migrate.rollback();
        await connection.destroy();
    })

    it('shoul be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({

                name: "teste",
                email: "contato@gmail.com",
                whatsapp: "47000000",
                city: "Cuiaba",
                uf: "MT"
            })
        console.log(response.body);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})