import { Component, OnInit, Input } from '@angular/core';
import { PanierService } from 'app/panier/service/panier.service';

@Component({
    selector: 'jhi-detail-panier',
    templateUrl: './detailPanier.component.html',
    styles: []
})
export class DetailComponent implements OnInit {
    @Input() private qte: number;
    @Input() private panier: Map<Number, Number>;
    @Input() private contenu: String;
    constructor(private panServ: PanierService) {}

    ngOnInit() {
        this.panServ.qtePublisher.subscribe(message => (this.qte = message));
        this.panier = this.panServ.getPanier();
        this.contenu = 'Panier Vide';
    }

    refresh() {
        this.contenu = '';
        this.panier.forEach((value: Number, key: Number) => {
            this.contenu += '[' + key + '] => ' + value + '\n';
        });
    }
}
