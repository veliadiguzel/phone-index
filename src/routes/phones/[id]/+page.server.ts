import { getPhone } from '$lib/database';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {

    const phone = await getPhone(Number(params.id))

    if (!phone) throw error(404, 'Phone not found');
    return { phone }
};