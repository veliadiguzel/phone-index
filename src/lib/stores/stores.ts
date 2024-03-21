import { type Writable, derived, writable } from "svelte/store";

export interface Phone {
    name: string
    section: string
    interphone: string
    search: string
}

export const term: Writable<string> = writable<string>("");

export const phones = writable<Phone[]>([]);

export const filtered = writable<Phone[]>([]);

export const temp = derived([term, phones], ([$term, $phones]): Phone[] =>
    $phones.filter((p) => {
        if ($term === "") return false;
        else if ($term == "*") return $phones
        else return p.search.includes($term.toLocaleUpperCase('tr-TR'))
    })
);



