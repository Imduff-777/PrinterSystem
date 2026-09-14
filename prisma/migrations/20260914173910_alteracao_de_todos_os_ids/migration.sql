/*
  Warnings:

  - The primary key for the `Aluno` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Autor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Solicitante` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `emprestimo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `itemEmprestimo` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Livro" DROP CONSTRAINT "Livro_autorID_fkey";

-- DropForeignKey
ALTER TABLE "emprestimo" DROP CONSTRAINT "emprestimo_alunoId_fkey";

-- DropForeignKey
ALTER TABLE "itemEmprestimo" DROP CONSTRAINT "itemEmprestimo_emprestimoId_fkey";

-- AlterTable
ALTER TABLE "Aluno" DROP CONSTRAINT "Aluno_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Aluno_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Aluno_id_seq";

-- AlterTable
ALTER TABLE "Autor" DROP CONSTRAINT "Autor_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Autor_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Autor_id_seq";

-- AlterTable
ALTER TABLE "Livro" ALTER COLUMN "autorID" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Solicitante" DROP CONSTRAINT "Solicitante_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Solicitante_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Solicitante_id_seq";

-- AlterTable
ALTER TABLE "emprestimo" DROP CONSTRAINT "emprestimo_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "alunoId" SET DATA TYPE TEXT,
ADD CONSTRAINT "emprestimo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "emprestimo_id_seq";

-- AlterTable
ALTER TABLE "itemEmprestimo" DROP CONSTRAINT "itemEmprestimo_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "emprestimoId" SET DATA TYPE TEXT,
ADD CONSTRAINT "itemEmprestimo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "itemEmprestimo_id_seq";

-- AddForeignKey
ALTER TABLE "Livro" ADD CONSTRAINT "Livro_autorID_fkey" FOREIGN KEY ("autorID") REFERENCES "Autor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emprestimo" ADD CONSTRAINT "emprestimo_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Aluno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itemEmprestimo" ADD CONSTRAINT "itemEmprestimo_emprestimoId_fkey" FOREIGN KEY ("emprestimoId") REFERENCES "emprestimo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
