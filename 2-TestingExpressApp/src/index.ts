import express from "express";
import { string, z } from "zod";
export const app = express();
app.use(express.json());

const sumInput = z.object({
    a : z.number(),
    b : z.number()
})

app.get("/" , (req , res) =>res.json({msg : "Working fine"}));

app.post("/summ" , (req , res) => {
    const parsedInput = sumInput.safeParse(req.body);
    
    if(!parsedInput.success) {
      return res.status(401).json({
            msg : "Invalid Inputs"
        })
    }

    const a = parsedInput.data?.a;
    const b = parsedInput.data?.b; // ?? 0 to remove the error ts error : 'b' is possibly 'undefined'.

    const answer = a + b;

    res.json({
        answer
    })

})

app.post("/sum", (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const answer = a + b;

    res.json({
        answer
    })
});