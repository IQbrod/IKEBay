import { Component, OnInit } from '@angular/core';
import { Categorie } from 'app/categories/model/categorie.model';
import { CategorieService } from 'app/categories/service/categorie.service';

@Component({
    selector: 'jhi-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['sidebar.css']
})
export class SidebarComponent implements OnInit {
    categ: Categorie[];

    constructor(private categorieService: CategorieService) {}

    ngOnInit() {
        this.categorieService.listAll().subscribe((c: Categorie[]) => (this.categ = c));
    }
}
