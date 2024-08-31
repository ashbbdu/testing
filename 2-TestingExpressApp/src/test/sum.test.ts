
import {describe, expect, test} from "@jest/globals"
import  request  from "supertest"
import { app } from ".."
describe("POST /sum" , () => {
    test("should return the sum of two numbers" , async () => {
        const res = await request(app).post("/sum").send({a : 1 , b: 2});
        expect(res.body.answer).toBe(3);
        expect(res.status).toBe(200);
    })
})

describe("POST /summ" , () => {
    test("Sucess if same data type" , async () => {
        const res = await request(app).post("/summ").send({a : 1 , b : 2});
        expect(res.body.answer).toBe(3);
        expect(res.status).toBe(200);
    }),
    test("Sucess if invalid input is passed" , async () => {
        const res = await request(app).post("/summ").send({a : 1 , b : "string"});
        expect(res.body.msg).toBe("Invalid Inputs");
        expect(res.status).toBe(401);
    })
})