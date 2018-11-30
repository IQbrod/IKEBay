import { Component, OnInit, Input } from '@angular/core';
import { PanierService } from 'app/panier/service/panier.service';

@Component({
    selector: 'jhi-detail-panier',
    templateUrl: './detailPanier.component.html',
    styles: []
})
export class DetailComponent implements OnInit {
    @Input() private panier: Map<Number, Number>;
    @Input() private contenu: String;

    constructor(private panServ: PanierService) {}

    ngOnInit() {
        this.panier = this.panServ.getPanier();
        this.panServ.qtePublisher.subscribe((message: Number) => {
            this.refresh();
        });
    }

    refresh() {
        this.contenu = '';
        this.panier.forEach((value: Number, key: Number) => {
            this.contenu += '[' + key + '] => ' + value + '\n';
        });
    }
}
