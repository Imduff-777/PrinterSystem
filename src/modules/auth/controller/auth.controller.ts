import repository from "../repository/auth.repository.js"
import type { Request, Response } from "express"
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";

async function login(req: Request, res: Response){
    try{
        const {username, password} = req.body
        const getUser = await repository.getUser(username)

        if(getUser?.usuario == undefined) return res.status(401).json({message: 'Credenciais inválidas'})
        
            const senhaCorreta = await bcrypt.compare(
                password,
                getUser!.senhaHash
            )
            
        
            if (!senhaCorreta) return res.status(401).json({message: 'Credenciais inválidas'})
            
            const token = jwt.sign({id: getUser!.id, user:getUser!.usuario}, process.env.JWT_SECRET!, {expiresIn: "1h"})
            res.json({token})
    }catch(e){
        console.log(e)
        res.status(500).json({error: "Erro ao fazer login"}) 
    }
}

export default {
    login
}