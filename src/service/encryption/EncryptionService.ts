import bcryptjs from "bcryptjs";
import Configuration from "../../utils/configurations";
import { injectable } from "tsyringe";
export default interface EncryptionService {
  hash(password: string): Promise<string>;
  compare(passwordRequest: string, passwordDatabase: string): Promise<boolean>;
}
@injectable()
export class EncryptionServiceImpl implements EncryptionService {
  async hash(password: string): Promise<string> {
    return await bcryptjs.hash(password, Configuration.SaltRound);
  }
  async compare(
    passwordRequest: string,
    passwordDatabase: string
  ): Promise<boolean> {
    return await bcryptjs.compare(passwordRequest, passwordDatabase);
  }
}
