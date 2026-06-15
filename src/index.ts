import express from "express"
import {printerRouter} from "./routes/printer.router.js"
import {booksRouter} from "./routes/books.router.js"
import {authorRouter} from "./routes/author.routes.js"
import cors from 'cors'

const app = express()
app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use("/printer", printerRouter)
app.use("/books", booksRouter)
app.use("/author", authorRouter)



export {app}

