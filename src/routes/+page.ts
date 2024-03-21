import type { phone } from "@prisma/client";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    const response = await fetch('/api/phones');
    const phones: phone[] = await response.json();
    return { phones }

};