import express from "express"
import bodyParser from "body-parser"
import usersControllers from "../src/Users/users.controllers"
const app = express()
const PORT = 5000
app.use(bodyParser.json())

app.use("/api/users", usersControllers)

app.listen(PORT, () => console.log("Server Running At PORT " + PORT))

export default app
