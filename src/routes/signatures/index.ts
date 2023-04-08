import { Router } from "express";
import SignatureController from "../../controller/SignatureController";
const routesSignature = Router();

routesSignature.get("/signatures",new SignatureController().index);


export default routesSignature