import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';

export interface IStock {
    id?: number;
    quantite?: number;
    reserver?: number;
}

export class Stock implements IStock {
    constructor(public product?: Product, public id?: number, public quantite?: number, public reserver?: number) {
        this.id = id ? id : null;
        this.quantite = quantite ? quantite : null;
        this.reserver = reserver ? reserver : null;
        // id ? this.productService.getProduct(id).subscribe((prods: Product) => (this.product = prods)) : (this.product = null);
    }
}
