import { json, type RequestHandler } from "@sveltejs/kit";

import db from '$lib/database'

export const GET: RequestHandler = async (event) => {

    const phones = await db.phone.findMany()

    event.setHeaders({
        'Cache-Control': 'max-age-60'
    })
    return new Response(JSON.stringify(phones))

};