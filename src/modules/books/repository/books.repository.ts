import { describe } from "node:test"
import type { Prisma } from "../../../../generated/prisma/client.js"
import { prisma } from "../../../prisma/prisma.js"
import { serialize } from "node:v8"
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

async function getBooks(page:number, pesquisa?:string, campo:string = "titulo", ordem:"asc" | "desc" = "asc") {
    let orderBy
    const limit = 10;

    switch(campo){
        case "subtitulo":
            orderBy = {
                subtitulo:ordem
            };break;

        case "autor":
            orderBy = {
                autor: {
                    nome:ordem
                }
            };break;

        case "editora":
            orderBy = {
                editora:ordem
            }
        
        default:
            orderBy = {
                titulo:ordem
            };
    }

    const where: Prisma.LivroWhereInput | undefined = pesquisa
    ? {
        OR: [

            {
                titulo:{
                    contains: pesquisa,
                    mode:"insensitive"
                }
            },

            {
                subtitulo:{
                    contains: pesquisa,
                    mode:"insensitive"
                }
            },

            {
                editora:{
                    contains:pesquisa,
                    mode:"insensitive"
                }
            },

            {
                autor:{
                    nome:{
                        contains: pesquisa,
                        mode:"insensitive"
                    }
                }
            }

        ]
    }
    : undefined;

    const [livros, total] = await prisma.$transaction([
        prisma.livro.findMany({
            skip:(page - 1) * limit,
            take:limit,
            ...(where && {
            where
            }),

            orderBy,
            include:{
                autor:true
            }
        }),

        prisma.livro.count({
            ...(where && {
            where
            })
        })
    ]);

    return{
        livros,
        total,
        pagina: page,
        totalPaginas: Math.ceil(total / limit)
    }
}

async function search(query:string) {
    const search = await prisma.livro.findMany({
        where:{
            OR:[
                {
                    titulo:{
                        contains:query,
                        mode: "insensitive"
                    }
                },
                {
                    subtitulo:{
                        contains:query,
                        mode: "insensitive"
                    }
                },
                {
                    editora:{
                        contains:query,
                        mode: "insensitive"
                    }
                },
                {
                    autor:{
                        nome:{
                            contains:query,
                            mode:"insensitive"
                        }
                    }
                }
            ]
        },

        include:{
            autor:true
        }
    })
    console.log(search)
    return search;
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
    deleteOrder,
    search,
    getBooks
}




