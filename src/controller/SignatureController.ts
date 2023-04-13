import { Request, Response } from "express";
import { Signature } from "../models/Signature";
class SignatureController {
    
    async index(req: Request, res: Response) {
        try {
            const carts = await Signature.find();
            return res.status(200).json(carts)
        } catch (error) {
            return res.status(500).json({ error: "Internal Error" })
        }
    }

    async create(req: Request, res: Response) {
        try {
            const { code, price } = req.body;
            const signature = Signature.create({ code, price })
            signature.save()
            return res.status(201).json(signature)
        } catch (error) {
            return res.status(500).json({ error: "Internal Error" })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params
            const { code, price } = req.body
            const signature = await Signature.findOneBy({ id: id })
            if (!signature) {
                return res.status(404).json({ error: "Assinatura Não Encontrando" });
            }
            signature.code = code
            signature.price = price
            signature.save();
            return res.status(200).json()

        } catch (error) {
            return res.status(500).json({ error: "Internal Error" })
        }
    }
    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params
            const signature = await Signature.findOneBy({ id: id })
            if (!signature) {
                return res.status(404).json({ error: "Assinatura Não Encontrando" });
            }
            await signature.remove()
            return res.status(200).json();
        } catch (error) {
            return res.status(500).json({ error: "Internal Error" })
        }
    }
}


export default SignatureController