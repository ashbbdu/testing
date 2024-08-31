"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
const sumInput = zod_1.z.object({
    a: zod_1.z.number(),
    b: zod_1.z.number()
});
exports.app.get("/", (req, res) => res.json({ msg: "Working fine" }));
exports.app.post("/summ", (req, res) => {
    var _a, _b;
    const parsedInput = sumInput.safeParse(req.body);
    if (!parsedInput.success) {
        return res.status(401).json({
            msg: "Invalid Inputs"
        });
    }
    const a = (_a = parsedInput.data) === null || _a === void 0 ? void 0 : _a.a;
    const b = (_b = parsedInput.data) === null || _b === void 0 ? void 0 : _b.b; // ?? 0 to remove the error ts error : 'b' is possibly 'undefined'.
    const answer = a + b;
    res.json({
        answer
    });
});
exports.app.post("/sum", (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const answer = a + b;
    res.json({
        answer
    });
});
