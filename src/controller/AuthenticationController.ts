import * as bcryptjs from "bcryptjs";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { injectable } from "tsyringe";
import { User } from "../models/User";
import Configuration from "../utils/configurations";
export interface Authentication {
  login(req: Request, res: Response): any;
  signUp(req: Request, res: Response): any;
}

@injectable()
export default class AuthenticationImpl implements Authentication {
  constructor() {}
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await User.findOneBy({
      email: email,
    });
    if (!user) {
      return res
        .status(404)
        .json({ error: "Usuario não encontrado ou senha incorreta" });
    }
    const compare = await bcryptjs.compare(password, user.password);
    if (!compare) {
      return res
        .status(404)
        .json({ error: "Usuario não encontrado ou senha incorreta" });
    }
    const {
      first_name,
      last_name,
      phone_number,
      avatar,
      zip_code,
      state,
      cyte,
    } = user;
    const refreshToken = jwt.sign({ email }, "chave-secret", {
      expiresIn: 2592000,
    });
    const acessToken = jwt.sign(
      {
        first_name,
        last_name,
        phone_number,
        email,
        avatar,
        zip_code,
        state,
        cyte,
      },
      "chave-secret",
      { expiresIn: "1h" }
    );
    return res.status(200).json({ refreshToken, acessToken });
  }
  async signUp(req: Request, res: Response) {
    try {
      const {
        first_name,
        last_name,
        password,
        phone_number,
        email,
        avatar,
        zip_code,
        state,
        cyte,
      } = req.body;
      if (await User.findOneBy({ email: email })) {
        return res.status(404).json({ error: "Email em Uso" });
      }

      const passwordHash = await bcryptjs.hash(
        password,
        Configuration.SaltRound
      );
      const user = User.create({
        first_name,
        last_name,
        phone_number,
        avatar,
        email,
        zip_code,
        state,
        cyte,
      });
      user.password = passwordHash;
      user.save();
      user.password = "";
      console.log(user);
      const refreshToken = jwt.sign({ email }, "chave-secret", {
        expiresIn: 2592000,
      });
      const acessToken = jwt.sign(
        {
          first_name,
          last_name,
          phone_number,
          email,
          avatar,
          zip_code,
          state,
          cyte,
        },
        "chave-secret",
        { expiresIn: "1h" }
      );
      return res.status(201).json({ acessToken, refreshToken });
    } catch (e) {
      console.log(e);
      return res.status(500).send(e);
    }
  }
}
