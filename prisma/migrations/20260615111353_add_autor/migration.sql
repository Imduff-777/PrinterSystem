/*
  Warnings:

  - You are about to drop the `Livros` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Solicitantes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Livros";

-- DropTable
DROP TABLE "Solicitantes";

-- CreateTable
CREATE TABLE "Solicitante" (
    "id" SERIAL NOT NULL,
    "nomeSolicitante" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "dataPedido" TIMESTAMP(3) NOT NULL,
    "prazo" TIMESTAMP(3),
    "dataEntrega" TIMESTAMP(3),

    CONSTRAINT "Solicitante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Livro" (
    "id" SERIAL NOT NULL,
    "autorID" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "subtitulo" TEXT NOT NULL,
    "editora" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "edicao" INTEGER NOT NULL,
    "formato" TEXT NOT NULL,
    "QntLivro" INTEGER NOT NULL,
    "cdd" INTEGER NOT NULL,

    CONSTRAINT "Livro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Autor" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Autor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Livro" ADD CONSTRAINT "Livro_autorID_fkey" FOREIGN KEY ("autorID") REFERENCES "Autor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
