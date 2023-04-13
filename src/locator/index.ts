import { container } from "tsyringe";
import EncryptionService, {
    EncryptionServiceImpl,
} from "../service/encryption/EncryptionService";
import { INJECTS } from "../utils/configurations/binds";

export const setupDependencies = () => {
    
    container.registerSingleton<EncryptionService>(
        INJECTS.EncryptionService,
        EncryptionServiceImpl
      );
}
