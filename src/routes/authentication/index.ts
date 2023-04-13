import { Router } from "express";
import { container } from "tsyringe";
import AuthenticationImpl, { Authentication } from "../../controller/AuthenticationController";

const routesAuthentication = Router();
const authentication = container.resolve<Authentication>(AuthenticationImpl);
/* const authentication = new AuthenticationImpl(); */

routesAuthentication.post("/login", authentication.login);
routesAuthentication.post("/signup", authentication.signUp);

export default routesAuthentication;
