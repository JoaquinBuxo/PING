const { describe, expect, test, beforeAll, afterAll } = require('@jest/globals');
const mongoose = require('mongoose');
const { router } = require('../router');
const { app } = require('../index');
const request = require('supertest');
const Tagline = require('../models/Tagline')


// const BASE_URL = 'https://ping-pncs.onrender.com'
const BASE_URL = 'http://localhost:5000'

const testTagline1 = {
  tagline: 'This is a test Tagline'
}

const testTagline2 = {
  tagline: 'This is a test Tagline2'
}





describe('POST /postTagline', () => {
  it('Should responds with status 201', async () => {
    const res = await request(BASE_URL)
    .post('/postTagline')
    .send(testTagline2);
   expect(res.status).toBe(201);
  })
})

describe('GET /getTaglines', () => {
  it('Should respond posted taglines, status 200', async () => {
    const res = await request(BASE_URL)
    .get('/getTaglines');
    expect(res.status).toBe(200);
    // const tagline = res.body;
    // expect(JSON.stringify(tagline)).toEqual(JSON.stringify(testTagline2));
  })
})
