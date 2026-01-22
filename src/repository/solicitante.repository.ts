import { prisma } from "../prisma/prisma.js"

type data = {
    nomeSolicitante: string, 
    titulo: string, 
    descricao: string, 
    dataPedido: Date,
    dataEntrega: Date
}

async function createOrder(data: data){
    const createOrder = await prisma.solicitantes.create({
        data
    })
    console.log(createOrder)
    return createOrder;
    
}

async function getOrder(){
    const getOrder = await prisma.solicitantes.findMany();
    console.log(getOrder)
    return getOrder;
}

async function updateOrder(id: number, data: data){ 
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




