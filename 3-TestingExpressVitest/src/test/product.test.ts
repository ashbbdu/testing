
import {describe, expect, test, it , vi} from 'vitest';
import request from "supertest";
import { app } from "../index"
vi.mock("../db" ,() => ({
    prismaClient : {product : {create : vi.fn()}}
}))
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