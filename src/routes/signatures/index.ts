import { Router } from "express";
import SignatureController from "../../controller/SignatureController";
const routesSignature = Router();

routesSignature.get("/signatures",new SignatureController().index);
routesSignature.post("/signatures",new SignatureController().create);
routesSignature.put("/signatures",new SignatureController().update);
routesSignature.delete("/signatures",new SignatureController().delete);


export default routesSignature