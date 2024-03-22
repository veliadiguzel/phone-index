import db from '$lib/database';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, url }) => {
    const phone = await db.phone.findUnique({
        where: { id: Number(params.id) }
    });

    if (!phone) throw error(404, 'Phone not found');
    return { phone }
};