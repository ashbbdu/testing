import {describe, expect, test, it , vi} from 'vitest';
import request from "supertest";
import { app } from "../index"

vi.mock("../db")



describe("POST /sum", () => {
  it("should return the sum of two numbers", async () => {
      const res = await request(app).post("/sum").send({
        a: 1,
        b: 2
      });
      expect(res.statusCode).toBe(200);
      expect(res.body.answer).toBe(3);
    });

    it("should return 411 if no inputs are provided", async () => {
      const res = await request(app).post("/sum").send({});
      expect(res.statusCode).toBe(411);
      expect(res.body.message).toBe("Incorrect inputs");
    });

});


describe("GET /sum", () => {
  it("should return the sum of two numbers if strings are passed", async () => {
      const res = await request(app)
        .get("/sum")
        .set({
          a: "1",
          b: "2"
        })
        .send();
      expect(res.statusCode).toBe(200);
      expect(res.body.answer).toBe(3);
  });

  it("should return 411 if no inputs are provided", async () => {
    const res = await request(app)
      .get("/sum").send();
    expect(res.statusCode).toBe(411);
  });

});


// NOTE/TODO : Make another table and make a db call 

describe("POST /product" , () => {
    it("should return the product of two numbers", async () => {
        const res = await request(app).post("/product").send({
          a: 1,
          b: 2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(2);
      });
})


// Note : Making a seperate file was not required see the mock implementation above

describe("POST /product" , () => {
    it("should return the product of two numbers", async () => {
        const res = await request(app).post("/product").send({
          a: 1,
          b: 2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(2);
      });
})