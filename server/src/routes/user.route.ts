import { Router } from "express";
const userRouter = Router();
import createUser from "../controllers/createUser.controller";

userRouter.post("/", async (req, res) => {
    const {id, userName, imageUrl} = req.body

    if(!userName){
        return res.status(400).json({message: "Wrong request, missing info"})
    }

    try{
        const user = await createUser({id, userName, imageUrl})

        return res.json({message: "User created correctly"})
    } catch(error){
        return res.status(500).send("Internal server error")
    }
})

export default userRouter