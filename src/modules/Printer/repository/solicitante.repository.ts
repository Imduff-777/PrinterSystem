import { describe } from "node:test"
import type { Prisma } from "../../../../generated/prisma/client.js"
import { prisma } from "../../../prisma/prisma.js"
type SolicitantesCreateInput = Prisma.SolicitantesCreateInput
/*
type data = {
    nomeSolicitante: string, 
    titulo: string, 
    descricao: string, 
    dataPedido: Date,
    dataEntrega?: Date | null | undefined
}
*/

async function createOrder(data: SolicitantesCreateInput){
    const createOrder = await prisma.solicitantes.create({
        data
    })
    console.log(createOrder)
    return createOrder;
    
}

async function getOrder(){
    console.log("entrou")
    const getOrder = await prisma.solicitantes.findMany();
    console.log(getOrder)
    return getOrder;
}

async function updateOrder(id: number, data: Prisma.SolicitantesCreateInput){ 
    const updateOrder = await prisma.solicitantes.update({
        where: {
            id: id
        },
        data
    })
    console.log(updateOrder)
    return updateOrder;
}

async function deleteOrder(id:number){
    const deleteOrder = await prisma.solicitantes.delete({
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




