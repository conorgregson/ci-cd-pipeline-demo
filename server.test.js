import request from "supertest";
import app from "./server.js";

describe("GET /", () => {
  it('responds with "Hello World"', async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toMatch(/Hello World/);
  });
});
