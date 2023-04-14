import { container } from "tsyringe";
import EncryptionService, {
  EncryptionServiceImpl,
} from "../service/encryption/EncryptionService";

container.registerSingleton<EncryptionService>(
  "EncryptionService",
  EncryptionServiceImpl
);
