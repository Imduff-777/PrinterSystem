import type { Prisma } from "../../../../generated/prisma/client.js"
import { prisma } from "../../../prisma/prisma.js"
import repository from "../repository/aluno.repository.js"



async function EmpAluno(alunoId: number) {
    const emprestimo = await prisma.emprestimo.findMany({
        where:{ 
            alunoId:alunoId
        }
    })

    if (emprestimo.length > 0){
        throw new Error(
            "Não é possível excluir o aluno porque ele possui empréstimos."
        );
    }


    return await repository.deleteAluno(alunoId);
    

}

export default{
    EmpAluno
}