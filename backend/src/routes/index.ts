import { Router } from "express";
import {  userSignup ,userLogin ,verifyUser, userLogout} from "../controllers/user-controllers.js";
import {validate,signupValidator,loginValidator} from "../utils/validators.js"
import { verifyToken } from "../utils/token-manager.js";

const appRouter = Router();

appRouter.post("/signup",validate(signupValidator),userSignup);
appRouter.post("/login",validate(loginValidator),userLogin);
appRouter.get("/auth-status",verifyToken,verifyUser);
appRouter.get("/logout",verifyToken,userLogout);

export default appRouter;