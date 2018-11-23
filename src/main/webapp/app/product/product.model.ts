export interface IProduct {
    id?: number;
    specification?: string;
    description?: string;
    price?: number;
    name?: string;
    photolink?: string;
}

export class Product implements IProduct {
    constructor(
        public id?: number,
        public specification?: string,
        public description?: string,
        public price?: number,
        public name?: string,
        public photolink?: string
    ) {
        this.id = id ? id : null;
        this.specification = specification ? specification : null;
        this.description = description ? description : null;
        this.price = price ? price : null;
        this.name = name ? name : null;
        this.photolink = photolink ? photolink : null;
    }
}
