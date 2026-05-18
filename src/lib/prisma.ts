import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import config from "../config";
import { PrismaClient } from "@prisma/client/extension";
// import { PrismaClient } from "../generated/prisma/client";

console.log("ENV db url : ", process.env.DATABASE_URL);
console.log("Config db url : ", config.database_url);

const connectionString = `${config.database_url}`

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

export { prisma }
