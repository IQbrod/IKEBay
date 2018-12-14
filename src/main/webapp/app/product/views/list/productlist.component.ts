import { Component, OnInit } from '@angular/core';
import { Product } from 'app/product/product.model';
import { ProductService } from 'app/product/product.service';

@Component({
    selector: 'jhi-productlist',
    templateUrl: './productlist.component.html',
    styleUrls: ['productlist.css']
})
export class ProductlistComponent implements OnInit {
    products: Product[] = [];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.listAll().subscribe((prods: Product[]) => (this.products = prods));
    }
}
