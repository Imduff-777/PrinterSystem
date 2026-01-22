import express from "express"
import { prisma } from "./prisma/prisma.js"
import { get } from "node:http"
import repository from "./repository/solicitante.repository.js"
import controller from "./controller/solicitante.controller.js"
const app = express()

app.use(express.json())

app.post("/addorder", controller.addOrder)
app.get("/", controller.getOrder)
app.put("/update/:id", controller.updateOrder)
app.delete("/delete/:id", controller.deleteOrder)


export {app}

