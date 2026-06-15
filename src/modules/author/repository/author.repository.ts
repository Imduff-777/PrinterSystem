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

async function getAutor(){
    console.log("entrou")
    const getAutor = await prisma.autor.findMany({
        include:{
            _count:{
                select:{
                    livros:true
                }
            }
        }
    });
    console.log(getAutor)
    return getAutor;
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