import { Component, OnInit, Input } from '@angular/core';
import { PanierService } from 'app/panier/service/panier.service';

@Component({
    selector: 'jhi-panier',
    templateUrl: './smallPanier.component.html',
    styles: [],
    providers: [PanierService]
})
export class PanierComponent implements OnInit {
    @Input() private totQte: number;

    constructor(private panServ: PanierService) {}

    ngOnInit() {
        this.panServ.qtePublisher.subscribe(val => (this.totQte = val));
    }
}
