import express from "express"
import { prisma } from "./prisma/prisma.js"
import { get } from "node:http"
import {createOrder, getOrder, updateOrder, deleteOrder} from "./repository/solicitante.repository.js"

const app = express()

app.use(express.json())

app.post("/addorder", async (req,res) => {
    try{
        const order = await createOrder(req.body)
        res.status(201).json(order)
    }catch(e){
        console.log(e)
        res.status(500).json({error: "Erro ao criar solicitante"}) 
    }
})

app.get("/", async (req, res) => {
    try{
        const order = await getOrder()
        res.status(200).json(order)
    }catch(e){
        console.log(e)
        res.status(500).json({error: "Erro ao puxar solicitantes"})
        
    }
    
})

app.put("/update/:id", async (req, res) => {
    try{
        const order = updateOrder(Number(req.params.id), req.body)
        res.json(order)
    }catch(e){
        console.log(e)
        res.status(404).json({error: "solicitante não encontrado"})
    }
    
})

app.delete("/delete/:id", async (req,res) => {
    try{
        const order = deleteOrder(Number(req.params.id))
        res.json(order)
    }catch(e){
        console.log(e)
        res.status(404).json({error: "solicitante não encontrado"})
    }
    
})


export {app}

