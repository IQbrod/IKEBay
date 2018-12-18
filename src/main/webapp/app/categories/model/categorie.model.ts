export interface ICategorie {
    id?: number;
    name?: string;
}

export class Categorie {
    constructor(public id?: number, public name?: string) {
        this.id = id ? id : null;
        this.name = name ? name : null;
    }
}
