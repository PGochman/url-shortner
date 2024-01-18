import app from "./app";
require("dotenv").config()

const port = process.env.PORT

app.listen(3001, () => {
    console.log(`server listening on port ${port}`)
})