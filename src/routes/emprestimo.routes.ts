import express from "express";
const emprestimoRouter = express.Router()
import controller from "../modules/emprestimo/controller/emprestimo.controller.js"

emprestimoRouter.get("/", controller.getEmprestimo)
emprestimoRouter.post("/createEmp", controller.createEmprestimo)
emprestimoRouter.put("/finEmp", controller.finalizarEmprestimo)

export{emprestimoRouter}