/*
  Warnings:

  - Changed the type of `data` on the `Livro` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Livro" ALTER COLUMN "data" TYPE SMALLINT USING EXTRACT(YEAR FROM "data")::SMALLINT;
