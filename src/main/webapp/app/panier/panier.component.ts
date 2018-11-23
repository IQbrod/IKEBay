import { Component, OnInit, Input } from '@angular/core';
import { Panier } from 'app/panier/model/panier';

@Component({
    selector: 'jhi-panier',
    templateUrl: './panier.component.html',
    styles: []
})
export class PanierComponent implements OnInit {
    @Input() myPanier: Panier;
    constructor() {}
    ngOnInit() {}
}
