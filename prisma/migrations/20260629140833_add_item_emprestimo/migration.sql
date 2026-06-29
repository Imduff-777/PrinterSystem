/*
  Warnings:

  - You are about to drop the column `livroId` on the `emprestimo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "emprestimo" DROP CONSTRAINT "emprestimo_livroId_fkey";

-- AlterTable
ALTER TABLE "emprestimo" DROP COLUMN "livroId";

-- CreateTable
CREATE TABLE "itemEmprestimo" (
    "id" SERIAL NOT NULL,
    "emprestimoId" INTEGER NOT NULL,
    "livroId" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "itemEmprestimo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "itemEmprestimo" ADD CONSTRAINT "itemEmprestimo_emprestimoId_fkey" FOREIGN KEY ("emprestimoId") REFERENCES "emprestimo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itemEmprestimo" ADD CONSTRAINT "itemEmprestimo_livroId_fkey" FOREIGN KEY ("livroId") REFERENCES "Livro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
