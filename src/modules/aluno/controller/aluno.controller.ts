import { get } from "node:http"
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

async function getAluno(req: Request, res: Response){
    try{
        const page = Number(req.query.page) || 1
        const order = await repository.getAluno(page)
        res.status(200).json(order)
    }catch(e){
        console.error(e)
        res.status(500).json({error: "Erro ao puxar Aluno"})
            
    }
}

async function updateAluno(req: Request, res: Response){
    try{
        const order = await repository.updateAluno(Number(req.params.id), req.body)
        res.json(order)
    }catch(e){
        console.log(e)
        res.status(404).json({error: "Aluno não encontrado"})
    }
}

async function deleteAluno(req: Request, res: Response){
    try{
        const order = await repository.deleteAluno(Number(req.params.id))
        res.json(order)
    }catch(e){
        console.log(e)
        res.status(404).json({error: "Aluno não encontrado"})
    }
}

export default {
    addAluno,
    getAluno,
    updateAluno,
    deleteAluno
}