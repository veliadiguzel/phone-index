import type { PageServerData } from './$types';

export const load: PageServerData = (async ({ fetch }) => {
    try {
        const response = await fetch('/api/phones');
        if (!response.ok) {
            throw new Error('Veri alınamadı');
        }
        const phones = await response.json(); // JSON verisini phones değişkenine atama
        return { phones }
    } catch (error) {
        console.error('Veri çekme hatası:', error.message);
    }

});