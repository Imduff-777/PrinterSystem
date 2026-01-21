import { prisma } from "../prisma/prisma.js"

async function createOrder(
    nomeSolicitante: string, 
    titulo:string, 
    descricao: string, 
    dataPedido: Date,
    dataEntrega: Date,){
    const order = await prisma.solicitantes.create({
        data:{
            nomeSolicitante:nomeSolicitante,
            titulo:titulo,
            descricao:descricao,
            dataPedido:dataPedido,
            dataEntrega:dataEntrega
        }
    })
    console.log(order)
}

export {createOrder}