import type { Prisma } from "../../../../generated/prisma/client.js"
import { prisma } from "../../../prisma/prisma.js"


type emprestimo = Prisma.itemEmprestimoCreateInput

interface CreateItemEmprestimoDTO {
    id:number[]
    dataDevolucao: Date;
}

interface CreateEmprestimoDTO {
    alunoId: number;
    dataPrevistaDevolucao: string | Date;
    livros: number[];
}

async function getEmprestimo(page:number){
    const limit = 10;
    const [emprestimos, total] = await prisma.$transaction([
        prisma.emprestimo.findMany({
            skip:(page - 1) * limit,
            take:limit,
            include:{
            itens:{include:{livro:true}},
            aluno:true
        }
        }),

        prisma.emprestimo.count()
    ])

    return{
        emprestimos,
        total,
        pagina: page,
        totalPaginas: Math.ceil(total / limit)
    }
}


async function createEmprestimo(data:CreateEmprestimoDTO){

    return await prisma.$transaction(async(tx)=>{


        const emprestimo = await tx.emprestimo.create({

            data:{
                alunoId:data.alunoId,
                dataPrevistaDevolucao:data.dataPrevistaDevolucao,
                
            }

        });



        await tx.itemEmprestimo.createMany({

            data:data.livros.map((a)=>({

                emprestimoId:emprestimo.id,

                livroId:a

            }))

        });

        await tx.livro.updateMany({
            where:{
                id:{
                    in:data.livros
                }
            },
            data:{
                disponivel:false
            }
        })



        return emprestimo;


    });

}

async function finalizarEmprestimo(data:CreateItemEmprestimoDTO){

    return await prisma.$transaction(async(tx)=>{
        const finalizarEmprestimo = await tx.itemEmprestimo.updateMany({
            where:{
                id:{
                    in:data.id
                }
            },
            data:{
                dataDevolucao:data.dataDevolucao
            }
        })

        const itens = await tx.itemEmprestimo.findMany({
            where:{
                id:{
                    in:data.id
                }
            }
        })

        const livros = itens.map(i => i.livroId)
        console.log(livros)

        await tx.livro.updateMany({
            where:{
                id:{
                    in:livros
                }
            },
            data:{
                disponivel:true
            }
        })

        return finalizarEmprestimo
    })

    
}



    


export default{
    createEmprestimo,
    finalizarEmprestimo,
    getEmprestimo
}