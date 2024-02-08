import { Router } from "express";
const router = Router()

import urldataRouter from "./urldata.router"
import userRouter from "./user.route";

router.use("/shorturl", urldataRouter)
router.use("/user", userRouter)


export default router