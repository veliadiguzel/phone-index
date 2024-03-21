import { getPhones } from '$lib/database';
import type { PageServerData } from './$types';

export const load: PageServerData = (async () => {
    const phones = await getPhones();
    return {
        props: {
            phones
        }
    };
});