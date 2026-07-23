/*
  Warnings:

  - You are about to drop the column `acervo` on the `Livro` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Livro" DROP COLUMN "acervo",
ADD COLUMN     "tombado" BOOLEAN NOT NULL DEFAULT false;
