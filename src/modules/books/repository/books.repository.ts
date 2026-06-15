import { describe } from "node:test"
import type { Prisma } from "../../../../generated/prisma/client.js"
import { prisma } from "../../../prisma/prisma.js"
type LivrosCreateInput = Prisma.LivrosCreateInput


async function createOrder(data: LivrosCreateInput){
    const createOrder = await prisma.livros.create({
        data
    })
    console.log(createOrder)
    return createOrder;
    
}


async function getOrder(){
    console.log("entrou")
    const getOrder = await prisma.livros.findMany();
    console.log(getOrder)
    return getOrder;
}

async function updateOrder(id: number, data: Prisma.LivrosCreateInput){ 
    const updateOrder = await prisma.livros.update({
        where: {
            id: id
        },
        data
    })
    console.log(updateOrder)
    return updateOrder;
}

async function deleteOrder(id:number){
    const deleteOrder = await prisma.livros.delete({
        where:{
            id: id
        }
    })
    console.log(deleteOrder)
    return deleteOrder;
}

export default{
    createOrder,
    getOrder, 
    updateOrder, 
    deleteOrder
}




