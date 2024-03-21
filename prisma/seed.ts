import { PrismaClient } from "@prisma/client"
import { datas } from "./kroman.js";

const db = new PrismaClient()

type Phone = {
    user: string
    section: string
    interphone: string
    search: string
}

const phones = datas;

async function main() {
    for (const phone of phones) {

        await db.phone.create({
            data: {
                name: phone.user,
                section: phone.section,
                interphone: phone.interphone.toString(),
                search: phone.search
            }
        })

    }
}

main()