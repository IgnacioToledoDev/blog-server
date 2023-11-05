import request from "supertest";
import app from "../../app";

describe("Blog API", async () => {
  it("should list all posts", async () => {
    const res = await request(app).get("/posts");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it("should create a new post", async () => {
    const res = await request(app).post("/posts").send({
      title: "Test Post",
      content: "This is a test post",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toEqual("Test Post");
  });
});
