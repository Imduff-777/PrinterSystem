import express from "express";
const authorRouter = express.Router()
import controller from "../modules/author/controller/author.controller.js"

authorRouter.get("/", controller.getAutor)
authorRouter.post("/addAutor", controller.addAutor)
authorRouter.put("/update/:id", controller.updateAutor)
authorRouter.delete("/delete/:id", controller.deleteAutor)

export{authorRouter}