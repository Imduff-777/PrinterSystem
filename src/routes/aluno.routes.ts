import express from "express";
const alunoRouter = express.Router()
import controller from "../modules/aluno/controller/aluno.controller.js"

alunoRouter.post("/addAluno", controller.addAluno)

export{alunoRouter}