import express from "express";
const emprestimoRouter = express.Router()
import controller from "../modules/emprestimo/controller/emprestimo.controller.js"

emprestimoRouter.post("/createEmp", controller.createEmprestimo)

export{emprestimoRouter}