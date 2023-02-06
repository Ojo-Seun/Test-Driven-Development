import express from "express"
import User from "./users.services"
const router = express.Router()

const user = new User()

router.get("/", (req, res) => {
  res.json(user.getAllUsers())
})

export default router
