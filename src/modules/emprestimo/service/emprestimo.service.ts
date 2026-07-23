import type { Prisma } from "../../../../generated/prisma/client.js"
import { prisma } from "../../../prisma/prisma.js"
import repository from "../repository/emprestimo.repository.js"

interface CreateEmprestimoDTO {
    alunoId: number;
    dataPrevistaDevolucao: string | Date;
    livros: number[];
}

async function EmpVerificar(data: CreateEmprestimoDTO) {

    const livros = await prisma.livro.findMany({

        where:{
            id:{
                in:data.livros
            }
        }

    });

    // Verifica se todos existem
    if (livros.length !== data.livros.length) {
        throw new Error("Um ou mais livros não existem.");
    }

    // Verifica disponibilidade
    const indisponivel = livros.find(l => !l.disponivel);

    if (indisponivel) {
        throw new Error(`O livro ${indisponivel.titulo} não está disponível.`);
    }

    // Verifica se pertence ao acervo
    const tombado= livros.find(l => l.tombado);

    if (tombado) {
        throw new Error(`O livro ${tombado.titulo} pertence ao tombado.`);
    }

    return await repository.createEmprestimo(data);

}

export default{
    EmpVerificar
}