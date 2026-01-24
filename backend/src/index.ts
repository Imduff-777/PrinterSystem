import express from "express"
import {router} from "./router.js"
import cors from 'cors'

const app = express()
app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use(router)


export {app}

