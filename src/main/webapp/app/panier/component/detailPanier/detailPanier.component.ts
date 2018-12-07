import { PanierEntry } from './../../model/panierentry.model';
import { Component, OnInit, Input } from '@angular/core';
import { PanierService } from 'app/panier/service/panier.service';

@Component({
    selector: 'jhi-detail-panier',
    templateUrl: './detailPanier.component.html',
    styles: []
})
export class DetailPanierComponent implements OnInit {
    @Input() public panier: Map<Number, PanierEntry>;
    totQte: number;
    constructor(private panServ: PanierService) {}

    ngOnInit() {
        this.panier = this.panServ.getPanier();
        this.panServ.qtePublisher.subscribe(val => (this.totQte = val));
    }

    ViderPanier() {
        this.panServ.ViderPanier();
    }

    computeTotalPrice() {
        let total = 0;
        this.panier.forEach((value: PanierEntry, key: Number) => {
            total = total + value.product.price * value.quantity;
        });
        total = Math.round(100 * total) / 100;
        return total;
    }
}
