export interface Credential {
    id: number;
    username: string;
    password: string;
}

export let credentials: Credential[] = [];