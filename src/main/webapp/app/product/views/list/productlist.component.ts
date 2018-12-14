import { Component, OnInit } from '@angular/core';
import { Product } from 'app/product/product.model';
import { ProductService } from 'app/product/product.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'jhi-productlist',
    templateUrl: './productlist.component.html',
    styleUrls: ['productlist.css']
})
export class ProductlistComponent implements OnInit {
    products: Product[] = [];
    name: string;
    constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.name = params['name'];
        });
        if (name != null) {
            this.productService.searchFor(name).subscribe((prods: Product[]) => (this.products = prods));
        } else {
            this.productService.listAll().subscribe((prods: Product[]) => (this.products = prods));
        }
    }
}
