import repository from "../repository/emprestimo.repository.js"
import service from "../service/emprestimo.service.js"
import type { Request, Response } from "express"

async function getEmprestimo(req:Request, res:Response) {
    try{
        const page = Number(req.query.page) || 1
        const getEmprestimo = await repository.getEmprestimo(page)
        res.status(200).json(getEmprestimo)
    }catch(e){
        console.error(e)
        res.status(500).json({error: "Erro ao buscar emprestimos"})
    }
}

async function createEmprestimo(req: Request, res: Response) {
    try{
        const data = req.body
        const createEmprestimo = await service.EmpVerificar(data)
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

async function deleteEmprestimo(req:Request, res:Response) {
    try{
        const deleteEmprestimo = await repository.deleteEmprestimo(Number(req.params.id))
        res.json(deleteEmprestimo)
    }catch(e){
        console.error(e)
        res.status(404).json({error: "Emprestimo não encontrado"})
    }
}

export default{
    createEmprestimo,
    finalizarEmprestimo,
    getEmprestimo,
    deleteEmprestimo
}