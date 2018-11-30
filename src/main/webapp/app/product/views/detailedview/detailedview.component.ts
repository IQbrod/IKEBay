import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'app/product/product.model';
import { ProductService } from 'app/product/product.service';

@Component({
    selector: 'jhi-detailedview',
    templateUrl: './detailedview.component.html',
    styles: []
})
export class DetailedviewComponent implements OnInit {
    @Input() product: Product;
    productId: number;

    constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {}

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.productId = params['id'];
        });

        this.productService.getProduct(this.productId).subscribe((prods: Product) => (this.product = prods));
    }
}
