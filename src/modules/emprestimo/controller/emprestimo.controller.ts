import repository from "../repository/emprestimo.repository.js"
import type { Request, Response } from "express"

async function getEmprestimo(req:Request, res:Response) {
    try{
        const getEmprestimo = await repository.getEmprestimo()
        res.status(200).json(getEmprestimo)
    }catch(e){
        console.error(e)
        res.status(500).json({error: "Erro ao buscar emprestimos"})
    }
}

async function createEmprestimo(req: Request, res: Response) {
    try{
        const data = req.body
        const createEmprestimo = await repository.createEmprestimo(data)
        res.status(200).json(createEmprestimo)
    }catch(e){
        console.error(e)
        res.status(500).json({error: "Erro ao buscar livros"})
    }
}

async function finalizarEmprestimo(req:Request, res: Response) {
    try {
        const data = req.body
        const finalizarEmprestimo = await repository.finalizarEmprestimo(data)
        res.status(200).json(finalizarEmprestimo)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: "Erro ao buscar livros"})
    }
    
}

export default{
    createEmprestimo,
    finalizarEmprestimo,
    getEmprestimo
}