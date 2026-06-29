import express from "express";
const booksRouter = express.Router()
import controller from "../modules/books/controller/books.controller.js"

booksRouter.get("/", controller.getBooks)
//booksRouter.get("/search", controller.getSearch)
booksRouter.post("/addorder", controller.addOrder)
booksRouter.put("/update/:id", controller.updateOrder)
booksRouter.delete("/delete/:id", controller.deleteOrder)

export{booksRouter}

