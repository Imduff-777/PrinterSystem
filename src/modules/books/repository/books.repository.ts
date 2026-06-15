import { describe } from "node:test"
import type { Prisma } from "../../../../generated/prisma/client.js"
import { prisma } from "../../../prisma/prisma.js"
type LivroCreateInput = Prisma.LivroCreateInput


async function createOrder(data: LivroCreateInput){
    const createOrder = await prisma.livro.create({
        data
    })
    console.log(createOrder)
    return createOrder;
    
}


async function getOrder(){
    console.log("entrou")
    const getOrder = await prisma.livro.findMany({
        include:{
            autor:true
        }
    });
    console.log(getOrder)
    return getOrder;
}

async function updateOrder(id: number, data: LivroCreateInput){ 
    const updateOrder = await prisma.livro.update({
        where: {
            id: id
        },
        data
    })
    console.log(updateOrder)
    return updateOrder;
}

async function deleteOrder(id:number){
    const deleteOrder = await prisma.livro.delete({
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




