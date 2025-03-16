const request = require('supertest');
const app = require('./server');

describe('To-Do API Tests', () => {
    test('GET /todos should return an array', async () => {
        const res = await request(app).get('/todos');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    test('POST /todos should create a new todo', async () => {
        const res = await request(app).post('/todos').send({ task: "Learn Jest" });
        expect(res.statusCode).toBe(201);
        expect(res.body.task).toBe("Learn Jest");
    });

    test('DELETE /todos/:id should delete a todo', async () => {
        const res = await request(app).delete('/todos/1');
        expect(res.statusCode).toBe(204);
    });
});
