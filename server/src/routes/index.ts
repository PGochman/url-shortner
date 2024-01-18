import { Router } from "express";
const router = Router()

import urldataRouter from "./urldata.router"

router.use("/shorturl", urldataRouter)

export default router