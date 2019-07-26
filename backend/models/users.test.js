const server = require('../api/server');
const request = require('supertest')
const db = require('../database/dbConfig')
// const User = require('./jokes');

beforeAll(async () => {
    await db('users').truncate()
})
describe('api/register', () => {
    it('should register new user', () => {
        request(server)
            .post('/api/register')
            .send({
                username: "Yusuf",
                password: '123456'
            })
            .then(res => {
                expect(res.status).toEqual(201)
            })
    })
});

describe('api/login', () => {
    it('sholud return error with invalid password', () => {
        request(server)
            .post('/api/login')
            .send({
                username: "Yusuf",
                password: '1234567'
            })
            .then(res => {
                expect(res.status).toEqual(400)
            })
    })
})