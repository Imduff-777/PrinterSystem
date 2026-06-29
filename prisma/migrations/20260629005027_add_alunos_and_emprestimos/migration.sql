-- CreateTable
CREATE TABLE "Aluno" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" CHAR(11) NOT NULL,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emprestimo" (
    "id" SERIAL NOT NULL,
    "alunoId" INTEGER NOT NULL,
    "livroId" INTEGER NOT NULL,
    "dataEmprestimo" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataDevolucao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "emprestimo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_cpf_key" ON "Aluno"("cpf");

-- AddForeignKey
ALTER TABLE "emprestimo" ADD CONSTRAINT "emprestimo_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emprestimo" ADD CONSTRAINT "emprestimo_livroId_fkey" FOREIGN KEY ("livroId") REFERENCES "Livro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
