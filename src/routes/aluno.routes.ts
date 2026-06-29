import express from "express";
const alunoRouter = express.Router()
import controller from "../modules/aluno/controller/aluno.controller.js"

alunoRouter.post("/addAluno", controller.addAluno)
alunoRouter.get("/getAluno", controller.getAluno )
alunoRouter.put("/updateAluno/:id", controller.updateAluno)
alunoRouter.delete("/deleteAluno/:id", controller.deleteAluno)

export{alunoRouter}