import repository from "../repository/emprestimo.repository.js"
import type { Request, Response } from "express"

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

export default{
    createEmprestimo
}