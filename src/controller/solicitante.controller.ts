import repository from "../repository/solicitante.repository.js"
import type { Request, Response } from "express"

async function addOrder(req: Request, res: Response){
    try{
        console.log(req.body)
        const order = await repository.createOrder(req.body)
        res.status(201).json(order)
    }catch(e){
        console.log(e)
        res.status(500).json({error: "Erro ao criar solicitante"}) 
    }
}

async function getOrder(req: Request, res: Response){
    try{
        const order = await repository.getOrder()
        res.status(200).json(order)
    }catch(e){
        console.log(e)
        res.status(500).json({error: "Erro ao puxar solicitantes"})
            
    }
}

async function updateOrder(req: Request, res: Response){
    try{
        const order = await repository.updateOrder(Number(req.params.id), req.body)
        res.json(order)
    }catch(e){
        console.log(e)
        res.status(404).json({error: "solicitante não encontrado"})
    }
}

async function deleteOrder(req: Request, res: Response){
    try{
        const order = await repository.deleteOrder(Number(req.params.id))
        res.json(order)
    }catch(e){
        console.log(e)
        res.status(404).json({error: "solicitante não encontrado"})
    }
}

export default {
    addOrder,
    getOrder,
    updateOrder,
    deleteOrder
}