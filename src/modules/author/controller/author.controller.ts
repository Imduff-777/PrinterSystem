import repository from "../repository/author.repository.js"
import type { Request, Response } from "express"

async function addAutor(req: Request, res: Response){
    try{
        console.log(req.body)
        const order = await repository.createAutor(req.body)
        res.status(201).json(order)
    }catch(e){
        console.log(e)
        res.status(500).json({error: "Erro ao criar autor"}) 
    }
}

async function getAutor(req: Request, res: Response){
    try{
        const order = await repository.getAutor()
        res.status(200).json(order)
    }catch(e){
        console.error(e)
        res.status(500).json({error: "Erro ao puxar autor"})
            
    }
}

async function updateAutor(req: Request, res: Response){
    try{
        const order = await repository.updateAutor(Number(req.params.id), req.body)
        res.json(order)
    }catch(e){
        console.log(e)
        res.status(404).json({error: "Autor não encontrado"})
    }
}

async function deleteAutor(req: Request, res: Response){
    try{
        const order = await repository.deleteAutor(Number(req.params.id))
        res.json(order)
    }catch(e){
        console.log(e)
        res.status(404).json({error: "Autor não encontrado"})
    }
}

export default {
    addAutor,
    getAutor,
    updateAutor,
    deleteAutor
}