import express, { Router } from "express"
import {printerRouter} from "./routes/printer.router.js"
import {booksRouter} from "./routes/books.router.js"
import {authorRouter} from "./routes/author.routes.js"
import {alunoRouter} from "./routes/aluno.routes.js"
import {emprestimoRouter} from "./routes/emprestimo.routes.js"
import {loginRouter} from "./routes/auth.routes.js"
import authToken from "./middlewares/auth.middleware.js";
import cors from 'cors'

const app = express()
app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use("/printer", authToken, printerRouter)
app.use("/books", authToken, booksRouter)
app.use("/author", authToken, authorRouter)
app.use("/aluno", authToken, alunoRouter)
app.use("/emprestimo", authToken, emprestimoRouter)
app.use("/login", loginRouter)




export default app

