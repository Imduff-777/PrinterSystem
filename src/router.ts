import express from "express";
const router = express.Router()
import controller from "./modules/Printer/controller/solicitante.controller.js"

router.get("/", controller.getOrder)
router.post("/addorder", controller.addOrder)
router.put("/update/:id", controller.updateOrder)
router.delete("/delete/:id", controller.deleteOrder)

export{router}
