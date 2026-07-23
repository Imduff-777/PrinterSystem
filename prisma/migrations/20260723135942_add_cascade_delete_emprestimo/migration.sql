-- DropForeignKey
ALTER TABLE "itemEmprestimo" DROP CONSTRAINT "itemEmprestimo_emprestimoId_fkey";

-- AddForeignKey
ALTER TABLE "itemEmprestimo" ADD CONSTRAINT "itemEmprestimo_emprestimoId_fkey" FOREIGN KEY ("emprestimoId") REFERENCES "emprestimo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
