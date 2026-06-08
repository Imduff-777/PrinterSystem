import express from "express";
const printerRouter = express.Router()
import controller from "../modules/Printer/controller/solicitante.controller.js"

printerRouter.get("/", controller.getOrder)
printerRouter.post("/addorder", controller.addOrder)
printerRouter.put("/update/:id", controller.updateOrder)
printerRouter.delete("/delete/:id", controller.deleteOrder)

export{printerRouter}
