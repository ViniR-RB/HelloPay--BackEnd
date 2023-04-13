import "reflect-metadata";
import app from './app';
import { conectDb } from './database/appdatasource';
import { setupDependencies } from "./locator";
import Configuration from "./utils/configurations";

const main = async () => {
    try {
        await conectDb.initialize()
        console.log(`Database is initialize: ${conectDb.isInitialized}`);
        app.listen(Configuration.port, () => {
            console.log(`App runner in  http://localhost:${Configuration.port}`)
        });
        setupDependencies()
    } catch (error) {
        if (error instanceof Error)
            console.log(error.message);

    }
}

main()