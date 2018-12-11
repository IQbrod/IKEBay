import { ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'app/product/product.model';
import { ProductService } from 'app/product/product.service';

@Component({
    selector: 'jhi-detailedview',
    templateUrl: './detailedview.component.html',
    styleUrls: ['detailview.css']
})
export class DetailedviewComponent implements OnInit {
    @Input() product: Product;
    content: String;
    @ViewChild('desc') desc: ElementRef;
    @ViewChild('spec') spec: ElementRef;
    productId: number;

    constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {}

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.productId = params['id'];
        });
        this.productService.getProduct(this.productId).subscribe((p: Product) => {
            this.product = p;
            /* Initialisation du contenu zonetexte */
            this.content = p.description;
        });
    }

    onClick(elementName) {
        switch (elementName) {
            case 'spec':
                this.content = this.product.specification;
                this.spec.nativeElement.classList.add('selected');
                this.desc.nativeElement.classList.remove('selected');
                break;
            case 'desc':
                this.desc.nativeElement.classList.add('selected');
                this.spec.nativeElement.classList.remove('selected');
                this.content = this.product.description;
                break;
            default:
                this.content = "Impossible d'afficher les informations";
        }
    }
}
