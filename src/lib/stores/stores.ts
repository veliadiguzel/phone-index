import { derived, writable } from "svelte/store";


export interface Phone {
    user: string
    section: string
    interphone: number
    search: string
}

export const term = writable<string>("");

export const phones = writable<Phone[]>([]);

export const filtered = writable<Phone[]>([]);

export const temp = derived([term, phones], ([$term, $phones]): Phone[] =>
    $phones.filter((p) => {
        if ($term === "") return false;
        else return p.search.includes($term.toLocaleUpperCase('tr-TR'))
    })
);



