import express from "express";
const booksRouter = express.Router()
import controller from "../modules/books/controller/books.controller.js"
import authToken from "../middlewares/auth.middleware.js";

booksRouter.get("/", authToken, controller.getBooks)
//booksRouter.get("/search", controller.getSearch)
booksRouter.post("/addorder", controller.addOrder)
booksRouter.put("/update/:id", controller.updateOrder)
booksRouter.delete("/delete/:id", controller.deleteOrder)
booksRouter.delete("/delete", controller.deleteBooks)

export{booksRouter}

