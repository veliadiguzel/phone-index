import { getPhones } from '$lib/database';
import type { PageServerData } from './$types';

export const load: PageServerData = (async () => {
    // Fetch data from the database or an API
    const phones = await getPhones();
    // Return the data as props
    return {
        props: {
            phones // This will be accessible in your Svelte component as `page.props.phones`
        }
    };
});