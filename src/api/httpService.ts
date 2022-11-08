export type Character = {
    id: number;
    firstName: string;
    lastName: string;
    fullName: string;
    title: string;
    family: string;
    image: string;
    imageUrl: string;
}

const Endpoints = {
    allCharacters: 'https://thronesapi.com/api/v2/Characters',
    characterById: 'https://thronesapi.com/api/v2/Characters'
}

// Per ogni chiamata asincrona è necessario wrappare il tipo di ritorno in una Promise
export const getCharacters = (): Promise<Array<Character>> => {
    return fetch(Endpoints.allCharacters)
        .then(res => res.json())
        .then(characters => characters);
}

export const getCharacterById = (id: number): Promise<Character> => {
    return fetch(`${Endpoints.characterById}/${id}`)
        .then(res => res.json())
        .then(character => character);
}