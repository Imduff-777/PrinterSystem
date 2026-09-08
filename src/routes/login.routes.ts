import express from "express";
const loginRouter = express.Router()
import jwt from 'jsonwebtoken';


const USERS = [{id: 1, username: 'erick', password: '1234'}]



loginRouter.post("/", (req, res) => {
    const {username, password} = req.body
    const user = USERS.find(u => u.username = username && u.password === password)

    if (!user) return res.status(401).json({message: 'Credenciais inválidas'})
    
    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET!, {expiresIn: "1h"})
    res.json({token})
})




export{loginRouter}