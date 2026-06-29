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

async function getAluno(){
    console.log("entrou")
    const getOrder = await prisma.aluno.findMany();
    console.log(getOrder)
    return getOrder;
}

async function updateAluno(id: number, data: AlunoCreateInput){ 
    const updateOrder = await prisma.aluno.update({
        where: {
            id: id
        },
        data
    })
    console.log(updateOrder)
    return updateOrder;
}

async function deleteAluno(id:number){
    const deleteOrder = await prisma.aluno.delete({
        where:{
            id: id
        }
    })
    console.log(deleteOrder)
    return deleteOrder;
}


export default{
    createAluno,
    deleteAluno,
    updateAluno,
    getAluno
}