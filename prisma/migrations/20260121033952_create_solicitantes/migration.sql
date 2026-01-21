-- CreateTable
CREATE TABLE "Solicitantes" (
    "id" SERIAL NOT NULL,
    "nomeSolicitante" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "dataPedido" TIMESTAMP(3) NOT NULL,
    "dataEntrega" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Solicitantes_pkey" PRIMARY KEY ("id")
);
