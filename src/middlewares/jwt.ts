import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
export default function autenticacaoMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        return res.status(401).json({ mensagem: "Token não fornecido" });
    }

    /* jwt.verify(token, "chave-secreta", (err, decoded) => {
      if (err) {
        return res.status(401).json({ mensagem: "Token inválido" });
      }
      req.user = decoded;
      next();
    }); */
}
