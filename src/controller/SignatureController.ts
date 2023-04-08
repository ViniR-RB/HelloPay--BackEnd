import { Request, Response } from "express"
class SignatureController {

    async index(req: Request, res: Response) {
        return res.status(200).json({ "message": "Hello" })
    }
}


export default SignatureController