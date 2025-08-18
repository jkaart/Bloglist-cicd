const supertest = require('supertest')
const { test, describe, after } = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const app = require('../app')

const api = supertest(app)

describe('health check', async () => {
  test('return ok if success', async () => {
    const response = await api
      .get('/health')
      .expect(200)

    assert.strictEqual('ok', response.text)
  })
})

after(async () => {
  await mongoose.connection.close()
})
