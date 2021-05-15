import request from "supertest";

import app from "./app";

describe("testing handler", () => {
  it("link to redirect", async (done) => {
    const result = await request(app).get("/");
    expect(result.status).toEqual(302);
    done();
  });

  it("param to redirect", async (done) => {
    const result = await request(app).get("/test");
    expect(result.status).toEqual(302);
    done();
  });

  it("param to static", async (done) => {
    const result = await request(app).get("/test2");
    expect(result.status).toEqual(200);
    expect(result.text).toContain("Testing");
    done();
  });

  it("param not found", async (done) => {
    const result = await request(app).get("/test3");
    expect(result.status).toEqual(400);
    done();
  });
});
