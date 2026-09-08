import { get } from "node:http"
import type { Prisma } from "../../../../generated/prisma/client.js"
import { prisma } from "../../../prisma/prisma.js"

async function getUser(user:string) {
    const getUser = await prisma.usuario.findUnique({
        where:{
            usuario: user
        }
    })
    return(getUser)
}

export default {
    getUser
}