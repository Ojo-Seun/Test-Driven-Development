import app from "../app"
import request from "supertest"

describe("users.controllers", () => {
  test("Get '/api/users' --> Should Return 'Hello'", async () => {
    const res = await request(app).get("/api/users")
    expect(res.statusCode).toBe(200)
  })
})
