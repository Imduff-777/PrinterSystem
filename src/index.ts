import express, { Router } from "express"
import {printerRouter} from "./routes/printer.router.js"
import {booksRouter} from "./routes/books.router.js"
import {authorRouter} from "./routes/author.routes.js"
import {alunoRouter} from "./routes/aluno.routes.js"
import {emprestimoRouter} from "./routes/emprestimo.routes.js"
import cors from 'cors'

const app = express()
app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use("/printer", printerRouter)
app.use("/books", booksRouter)
app.use("/author", authorRouter)
app.use("/aluno", alunoRouter)
app.use("/emprestimo", emprestimoRouter)



export default {app}

