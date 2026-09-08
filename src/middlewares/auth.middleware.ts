import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Estendemos a interface para permitir que 'user' seja opcional na requisição
interface AuthenticatedRequest extends Request {
    user?: string | jwt.JwtPayload;
}

export function authToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const authHeader = req.headers["authorization"];
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.sendStatus(401);
    }

    // Pegamos a segunda parte da string do cabeçalho
    const token = authHeader.split(" ")[1];

    // Se por algum motivo o token for nulo/undefined após o split, barramos aqui
    if (!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
        if (err || !user) { 
            return res.sendStatus(403); // Se der erro ou se o 'user' for undefined, retorna 403
        }
        
        req.user = user; // Agora o TypeScript tem certeza de que 'user' NÃO é undefined
        next();
    });
}

export default authToken
