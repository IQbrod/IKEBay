import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Categorie } from 'app/categories/model/categorie.model';
import { CategorieService } from 'app/categories/service/categorie.service';
import { Router } from '@angular/router';

@Component({
    selector: 'jhi-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['sidebar.css']
})
export class SidebarComponent implements OnInit {
    categ: Categorie[];
    selId: number;
    pageN: number;

    constructor(private categorieService: CategorieService, private router: Router) {
        this.selId = 0;
        this.pageN = 0;
        this.categorieService.catPublisher.subscribe((id: number) => (this.selId = id));
        this.categorieService.pagePublisher.subscribe((p: number) => {
            this.pageN = p;
        });
    }

    ngOnInit() {
        this.categorieService.listAll().subscribe((c: Categorie[]) => (this.categ = c));
    }

    filter(cat: string) {
        if (cat !== '0') {
            this.router.navigate(['/products'], {
                queryParams: { categorieid: cat, page: null, name: null },
                queryParamsHandling: 'merge'
            });
        } else {
            // remove the categorie id from queryParams
            this.router.navigate(['/products'], {
                queryParams: { categorieid: null, page: null, name: null },
                queryParamsHandling: 'merge'
            });
        }
    }

    filterPage(pId: number) {
        this.pageN = pId;
        if (this.pageN == 0) {
            this.pageN = null;
        }
        this.router.navigate(['/products'], { queryParams: { page: this.pageN }, queryParamsHandling: 'merge' });
    }
}
