/*
  Warnings:

  - The primary key for the `Livro` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "itemEmprestimo" DROP CONSTRAINT "itemEmprestimo_livroId_fkey";

-- AlterTable
ALTER TABLE "Livro" DROP CONSTRAINT "Livro_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Livro_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Livro_id_seq";

-- AlterTable
ALTER TABLE "itemEmprestimo" ALTER COLUMN "livroId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "itemEmprestimo" ADD CONSTRAINT "itemEmprestimo_livroId_fkey" FOREIGN KEY ("livroId") REFERENCES "Livro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
