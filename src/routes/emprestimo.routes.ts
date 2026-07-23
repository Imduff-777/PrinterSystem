import express from "express";
const emprestimoRouter = express.Router()
import controller from "../modules/emprestimo/controller/emprestimo.controller.js"

emprestimoRouter.get("/", controller.getEmprestimo)
emprestimoRouter.post("/createEmp", controller.createEmprestimo)
emprestimoRouter.put("/finEmp", controller.finalizarEmprestimo)
emprestimoRouter.delete("/del/:id", controller.deleteEmprestimo)

export{emprestimoRouter}