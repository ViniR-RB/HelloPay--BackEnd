import "reflect-metadata";
import { container } from "tsyringe";
import App from "./app";
import { conectDb } from './database/appdatasource';
import Configuration from "./utils/configurations";
const app = container.resolve(App)
const main = async () => {
    try {
        await conectDb.initialize()
        console.log(`Database is initialize: ${conectDb.isInitialized}`);
        app.server.listen(Configuration.port, () => {
            console.log(`App runner in  http://localhost:${Configuration.port}`)
        });
    } catch (error) {
        if (error instanceof Error)
            console.log(error.message);

    }
}

main()