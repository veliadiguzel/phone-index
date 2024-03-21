import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function getPhones() {
    const phones = await db.phone.findMany();
    return phones;
}

export default db