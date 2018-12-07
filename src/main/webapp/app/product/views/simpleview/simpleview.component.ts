import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'app/product/product.model';

@Component({
    selector: 'jhi-simpleview',
    templateUrl: './simpleview.component.html',
    styleUrls: ['simpleview.css']
})
export class SimpleviewComponent implements OnInit {
    @Input() product: Product;

    constructor() {}
    ngOnInit() {}
}
