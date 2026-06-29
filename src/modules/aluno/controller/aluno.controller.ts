import repository from "../repository/aluno.repository.js"
import type { Request, Response } from "express"

async function addAluno(req: Request, res: Response){
    try{
        console.log(req.body)
        const order = await repository.createAluno(req.body)
        res.status(201).json(order)
    }catch(e){
        console.log(e)
        res.status(500).json({error: "Erro ao criar aluno"}) 
    }
}

export default {
    addAluno
}