import express, { urlencoded } from "express"
import morgan from "morgan"
import cors from "cors"
import { connectionDB } from "./connection/connection"
import router from "./routes/index"

const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(urlencoded({extended: false}))
app.use(express.json())

connectionDB()

app.use(router)

export default app