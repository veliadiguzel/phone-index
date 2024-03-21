import { json, type RequestHandler } from "@sveltejs/kit";

import db from '$lib/database'

export const GET: RequestHandler = async (event) => {

    const phones = await db.phone.findMany({
        take: Math.round(Math.random() * 30)
    })

    event.setHeaders({
        'Cache-Control': 'max-age-60'
    })

    return json(phones)

};