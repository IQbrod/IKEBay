import { Component, OnInit } from '@angular/core';
import { Product } from 'app/product/product.model';
import { ProductService } from 'app/product/product.service';

@Component({
    selector: 'jhi-productlist',
    templateUrl: './productlist.component.html',
    styleUrls: ['productlist.css']
})
export class ProductlistComponent implements OnInit {
    products: Product[] = [
        /* { id: 1, name: 'canape rouge', photolink: 'https://www.ikea.com/PIAimages/0504261_PE633252_S3.JPG', price: 15 },
        { id: 2, name: 'canape bleu', photolink: 'https://www.ikea.com/PIAimages/0504261_PE633252_S3.JPG', price: 15 },
        { id: 3, name: 'canape vert', photolink: 'https://www.ikea.com/PIAimages/0504261_PE633252_S3.JPG', price: 15 } */
    ];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.listAll().subscribe((prods: Product[]) => (this.products = prods));
    }
}
