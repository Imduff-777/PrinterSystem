import { totalmem } from "node:os"
import type { Prisma } from "../../../../generated/prisma/client.js"
import { prisma } from "../../../prisma/prisma.js"
type AutorCreateInput = Prisma.AutorCreateInput

async function createAutor(data:AutorCreateInput) {
    const createAutor = await prisma.autor.create({
        data
    })
    console.log(createAutor)
    return createAutor
}

async function getAutor(page: number){
    const limit = 10
    console.log("entrou")
    const [autores, total] = await prisma.$transaction([
        prisma.autor.findMany({

            skip:(page - 1) * limit,
            take:limit,

            include:{
                livros:true
        }
        }),
        prisma.autor.count()
    ])
    
    console.log(autores)
    return {
        autores,
        total,
        pagina: page,
        totalPaginas: Math.ceil(total / limit)
    }
}

async function updateAutor(id: number, data: AutorCreateInput){ 
    const updateAutor = await prisma.autor.update({
        where: {
            id: id
        },
        data
    })
    console.log(updateAutor)
    return updateAutor;
}

async function deleteAutor(id:number){
    const deleteAutor = await prisma.autor.delete({
        where:{
            id: id
        }
    })
    console.log(deleteAutor)
    return deleteAutor;
}

export default{
    createAutor,
    getAutor,
    updateAutor,
    deleteAutor
}