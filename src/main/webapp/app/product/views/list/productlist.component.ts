import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from 'app/product/product.model';
import { ProductService } from 'app/product/product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CategorieService } from 'app/categories/service/categorie.service';

@Component({
    selector: 'jhi-productlist',
    templateUrl: './productlist.component.html',
    styleUrls: ['productlist.css']
})
export class ProductlistComponent implements OnInit {
    products: Product[] = [];
    name: string;
    categorie: number;
    page: number;

    constructor(
        private productService: ProductService,
        private activatedRoute: ActivatedRoute,
        private categorieService: CategorieService
    ) {}

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.name = params['name'];
            this.categorie = params['categorieid'];
            this.page = params['page'];
        });

        /* Changement par Name */
        this.productService.searchFor(this.name, this.categorie).subscribe((prods: Product[]) => (this.products = prods));

        /* Chargement de la categorie */
        if (this.categorie != null) {
            this.categorieService.setCategorie(this.categorie);
        } else {
            this.categorieService.setCategorie(0);
        }

        /* Chargement de la page */
        if (this.page != null) {
            this.categorieService.setPage(this.page);
        }
    }
}
