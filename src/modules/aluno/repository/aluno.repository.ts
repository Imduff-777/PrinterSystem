import type { Prisma } from "../../../../generated/prisma/client.js"
import { prisma } from "../../../prisma/prisma.js"
type AlunoCreateInput = Prisma.AlunoCreateInput

async function createAluno(data:AlunoCreateInput) {
    const createAluno = await prisma.aluno.create({
        data
    })
    console.log(createAluno)
    return createAluno
}

export default{
    createAluno
}