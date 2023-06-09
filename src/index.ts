import app from './app';
import { conectDb } from './database/appdatasource';
import Configuration from "./utils/configurations";

const main = async () => {
    try {
        await conectDb.initialize()
        console.log(`Database is initialize: ${conectDb.isInitialized}`);
        app.listen(Configuration.port, () => {
            console.log(`Example app listening on port ${Configuration.port}`)
        });
    } catch (error) {
        if (error instanceof Error)
            console.log(error.message);

    }
}

main()