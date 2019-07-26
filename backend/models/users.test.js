const request = require('supertest')
const server = require('../api/server');
const db = require('../database/dbConfig');
const jwt = require('../auth/authenticate');
// const User = require('./jokes');

beforeAll(async () => {
    await db('users').truncate()
})
describe('api/register', () => {
    it('should register new user', () => {
        return request(server)
            .post('/api/register')
            .send({
                username: "Yusuf",
                password: '123456'
            })
            .then(res => {
                expect(res.status).toEqual(201)
            })
    });
    it('should not register same user', () => {
        return request(server)
            .post('/api/register')
            .send({
                username: "Yusuf",
                password: '123456'
            })
            .then(res => {
                expect(res.status).toEqual(500)
            })
    })
});

describe('api/login', () => {
    it('sholud return error with invalid password', () => {
        return request(server)
            .post('/api/login')
            .send({
                username: "Yusuf",
                password: '1234567'
            })
            .then(res => {
                expect(res.status).toEqual(400)
            })
    });
    it('sholud return a valid user', () => {
        return request(server)
            .post('/api/login')
            .send({
                username: "Yusuf",
                password: '123456'
            })
            .then(res => {
                expect(res.status).toEqual(200)
            })
    })
});

describe('/api/jokes', () => {
    it('should return a 401', () => {
        return request(server)
            .get('/api/jokes')
            .then(res => {
                expect(res.status).toEqual(401)
            })
    });
    it('should acces the route', () => {
        const token = jwt.generateToken({
            id: 1,
            username: "Yusuf"
        })
        return request(server)
            .get('/api/jokes')
            .set('Authorization', token)
            .then(res => {
                expect(res.status).toEqual(200)
            })
    })

})