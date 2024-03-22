import { PrismaClient, type phone } from "@prisma/client";

const db = new PrismaClient();

export async function getPhones() {
    const phones = await db.phone.findMany();
    return phones;

}

export async function getPhone(id: Number) {
    const phone: phone = await db.phone.findUnique({
        where: { id: Number(id) }
    });
    return phone;

}

export default db