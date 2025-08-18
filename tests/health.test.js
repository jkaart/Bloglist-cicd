const supertest = require('supertest')
const { test, describe } = require('node:test')
const assert = require('node:assert')
const app = require('../app')

const api = supertest(app)

describe('health check', () => {
  test('return ok if success', async () => {
    const response = await api
      .get('/health')
      .expect(200)

    assert.strictEqual('ok', response.text)
  })
})
