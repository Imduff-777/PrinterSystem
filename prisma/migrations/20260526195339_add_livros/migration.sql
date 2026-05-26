-- CreateTable
CREATE TABLE "Livros" (
    "id" SERIAL NOT NULL,
    "autor" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "subtitulo" TEXT NOT NULL,
    "editora" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "edicao" INTEGER NOT NULL,
    "formato" TEXT NOT NULL,
    "QntLivro" INTEGER NOT NULL,
    "cdd" INTEGER NOT NULL,

    CONSTRAINT "Livros_pkey" PRIMARY KEY ("id")
);
