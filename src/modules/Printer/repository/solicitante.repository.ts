import { describe } from "node:test"
import type { Prisma } from "../../../../generated/prisma/client.js"
import { prisma } from "../../../prisma/prisma.js"
type SolicitantesCreateInput = Prisma.SolicitanteCreateInput
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
    const createOrder = await prisma.solicitante.create({
        data
    })
    console.log(createOrder)
    return createOrder;
    
}

async function getOrder(){
    console.log("entrou")
    const getOrder = await prisma.solicitante.findMany();
    console.log(getOrder)
    return getOrder;
}

async function updateOrder(id: number, data: Prisma.SolicitanteCreateInput){ 
    const updateOrder = await prisma.solicitante.update({
        where: {
            id: id
        },
        data
    })
    console.log(updateOrder)
    return updateOrder;
}

async function deleteOrder(id:number){
    const deleteOrder = await prisma.solicitante.delete({
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




