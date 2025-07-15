import request from "supertest";
import { app } from "../src/server";
import { testSequelize } from "../src/db/testDb";

describe("Auth Routes", () => {
  beforeAll(async () => {
    await testSequelize.sync({ force: true });
  });

  afterAll(async () => {
    await testSequelize.close();
  });

  it("should return 404 on GET /", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(404);
  });
});

it("should return 404 on GET /", async () => {
  const res = await request(app).get("/");
  expect(res.status).toBe(404);
});
