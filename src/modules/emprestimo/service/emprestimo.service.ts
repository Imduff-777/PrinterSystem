import type { Prisma } from "../../../../generated/prisma/client.js"
import { prisma } from "../../../prisma/prisma.js"
import repository from "../repository/emprestimo.repository.js"

interface CreateEmprestimoDTO {
    alunoId: number;
    dataPrevistaDevolucao: string | Date;
    livros: number[];
}

async function create(data: CreateEmprestimoDTO) {

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
    const foraDoAcervo = livros.find(l => !l.acervo);

    if (foraDoAcervo) {
        throw new Error(`O livro ${foraDoAcervo.titulo} não pertence ao acervo.`);
    }

    return await repository.createEmprestimo(data);

}