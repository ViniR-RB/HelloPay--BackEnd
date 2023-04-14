import { Request, Response } from "express";

import { inject, injectable } from "tsyringe";
import { User } from "../models/User";
import EncryptionService from "../service/encryption/EncryptionService";

export interface Authentication {
  login(req: Request, res: Response): any;
  signUp(req: Request, res: Response): any;
}

@injectable()
export default class AuthenticationImpl implements Authentication {
  private encryptionService: EncryptionService
  constructor(
    @inject('EncryptionService')
    encryptionService: EncryptionService
  ) {
    this.encryptionService = encryptionService
   }
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
    const compare = await this.encryptionService.compare(
      password,
      user.password
    );
    if (!compare) {
      return res
        .status(404)
        .json({ error: "Usuario não encontrado ou senha incorreta" });
    }
    return res.status(200).json(user);
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

      const passwordHash = await this.encryptionService.hash(password);
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
      console.log(user);
      return res.status(201).json(user);
    } catch (e) {
      console.log(e);
      console.log(e);
      return res.status(500).send(e);
    }
  }
}
