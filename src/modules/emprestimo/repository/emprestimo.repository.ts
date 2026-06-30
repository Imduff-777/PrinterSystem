import type { Prisma } from "../../../../generated/prisma/client.js"
import { prisma } from "../../../prisma/prisma.js"

interface CreateEmprestimoDTO {
    alunoId: number;
    dataPrevistaDevolucao: string | Date;
    livros: number[];
}


async function createEmprestimo(data:CreateEmprestimoDTO){

    return await prisma.$transaction(async(tx)=>{


        const emprestimo = await tx.emprestimo.create({

            data:{
                alunoId:data.alunoId,
                dataPrevistaDevolucao:data.dataPrevistaDevolucao
            }

        });



        await tx.itemEmprestimo.createMany({

            data:data.livros.map((a)=>({

                emprestimoId:emprestimo.id,

                livroId:a

            }))

        });



        return emprestimo;


    });

}

export default{
    createEmprestimo
}