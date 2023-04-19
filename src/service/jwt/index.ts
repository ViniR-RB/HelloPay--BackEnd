import jwt from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
@injectable()
export default class JwtService {
  async sign(email: String) {
    const token = jwt.sign({ email }, "chave-secret", { expiresIn: "1h" });
    return token;
  }
}
