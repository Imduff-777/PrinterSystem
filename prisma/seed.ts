import bcrypt from "bcryptjs";
import { prisma } from "../src/prisma/prisma.js";
import express from "express";

const senhaHash = await bcrypt.hash(process.env.PASS!, 10);

await prisma.usuario.create({
    data: {
        usuario: process.env.USER!,
        senhaHash
    }
});

console.log("Usuário criado!");


await prisma.$disconnect();