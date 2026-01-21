import express from "express"
import { prisma } from "./prisma/prisma.js"
import { get } from "node:http"
import {createOrder} from "./repository/solicitante.repository.js"

const app = express()

app.use(express.json())

app.post("/adduser", (req,res) => {
    const body = req.body
    createOrder(body.nomeSolicitante, body.titulo, body.descricao, body.dataPedido, body.dataEntrega)
})


app.get("/", async (req, res) => {
    async function getUsers(){
        const users = await prisma.solicitantes.findMany();
        return users;
    }
    const result = await getUsers()
    res.json(result)
})


export {app}

