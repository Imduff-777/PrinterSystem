/*
  Warnings:

  - You are about to drop the column `dataDevolucao` on the `emprestimo` table. All the data in the column will be lost.
  - You are about to drop the column `quantidade` on the `itemEmprestimo` table. All the data in the column will be lost.
  - Added the required column `dataPrevistaDevolucao` to the `emprestimo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "emprestimo" DROP COLUMN "dataDevolucao",
ADD COLUMN     "dataPrevistaDevolucao" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "itemEmprestimo" DROP COLUMN "quantidade",
ADD COLUMN     "dataDevolucao" TIMESTAMP(3);
