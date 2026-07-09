/*
  Warnings:

  - Added the required column `pg` to the `Aluno` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PostoGraduacao" AS ENUM ('SC', 'SD', 'CB', 'SGT', 'ST', 'ASP', 'TEN', 'CAP', 'MAJ', 'TC', 'CEL');

-- AlterTable
ALTER TABLE "Aluno" ADD COLUMN     "pg" "PostoGraduacao" NOT NULL;
