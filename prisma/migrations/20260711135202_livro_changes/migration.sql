/*
  Warnings:

  - You are about to drop the column `QntLivro` on the `Livro` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Livro" DROP COLUMN "QntLivro",
ADD COLUMN     "acervo" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "cdd" SET DATA TYPE TEXT;
