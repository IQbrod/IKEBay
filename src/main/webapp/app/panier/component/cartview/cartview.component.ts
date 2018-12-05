import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'app/product/product.model';
import { ProductService } from 'app/product/product.service';
import { PanierService } from 'app/panier/service/panier.service';

@Component({
    selector: 'jhi-cartview',
    templateUrl: './cartview.component.html',
    styles: []
})
export class CartviewComponent implements OnInit {
    @Input() productId: number;
    @Input() quantity: number;
    @Input() product: Product;

    constructor(private productService: ProductService, private panServ: PanierService) {}

    ngOnInit() {
        // this.productService.getProduct(this.productId).subscribe((prods: Product) => (this.product = prods));
    }

    Sub() {
        this.panServ.removeItem(this.productId, 1);
    }

    Add() {
        this.panServ.addItem(this.productId, 1);
    }
}
