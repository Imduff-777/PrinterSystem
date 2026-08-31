import "dotenv/config";
import { PrismaClient } from "../../generated/prisma/client.js"

//Caso for usar banco de dados neon na nuvem usar adapter do Neon.
import { PrismaNeon } from "@prisma/adapter-neon";
//Caso for usar banco de dados local usar adapter do propio Postgres.
//import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = `${process.env.DATABASE_URL}`

//Adapter Neon
const adapter = new PrismaNeon({connectionString})
//Adapter Postgres
/*const adapter = new PrismaPg({
    connectionString,
    ssl:{
        rejectUnauthorized:false
    }})
*/
const prisma = new PrismaClient({adapter})

export { prisma }