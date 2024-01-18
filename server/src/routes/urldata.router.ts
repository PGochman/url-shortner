import { Router } from "express";
const urldataRouter = Router()
import createUrl from "../controllers/createURL.controller"

urldataRouter.post("/", async (req, res) => {
    const {url} = req.body

    try{

        const createdURL = await createUrl({url})

        return res.json(createdURL)
    } catch{
        return res.status(500).send("Internal server error")
    }

})

export default urldataRouter