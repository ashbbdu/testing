import {describe, expect, test} from "@jest/globals"
import { sum } from ".."


describe("sum module" , () => {
    test("find the sum correct" , () => {
        expect(sum(1,2)).toBe(3);
    }),
    test("find the sum incorrect" , () => {
        expect(sum(1,2)).not.toBe(5);
    }),
    test("find the sum with negative values" , () => {
        expect(sum(-1,-2)).toBe(-3);
    })
})