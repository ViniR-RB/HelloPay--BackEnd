import cors from "cors";
import express from 'express';
import routesSignature from "./routes/signatures";
class App {
    server: any;

    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.server.use(express.json());
        this.server.use(cors());
    }

    routes() {
        this.server.use(routesSignature);
    }
}

export default new App().server;