import { Product } from '../../product/product.model';
import { ProductService } from 'app/product/product.service';
export interface IPanierEntry {
    id?: number;
    product?: Product;
    quantity?: number;
}

export class PanierEntry implements IPanierEntry {
    constructor(private productService: ProductService, public id?: number, public product?: Product, public quantity?: number) {
        this.id = id ? id : null;
        this.quantity = quantity ? quantity : null;
        id ? this.productService.getProduct(id).subscribe((prods: Product) => (this.product = prods)) : (this.product = null);
    }
}
