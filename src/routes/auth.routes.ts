import express from "express";
const loginRouter = express.Router()
import controller from "../modules/auth/controller/auth.controller.js"

loginRouter.post("/", controller.login)

export{loginRouter}