import { Component, OnInit, Input } from '@angular/core';
import { PaiementInfos } from 'app/paiement/paiementinfo.model';
import { PaiementService } from 'app/paiement/paiement.service';
import { PanierService } from 'app/panier/service/panier.service';

@Component({
    selector: 'jhi-finpaiement',
    templateUrl: './finpaiement.component.html',
    styles: []
})
export class FinPaiementComponent implements OnInit {
    @Input() form: PaiementInfos;

    constructor(private paiementserv: PaiementService, private panierService: PanierService) {}

    ngOnInit() {
        this.form = this.paiementserv.formobject;
        this.form.name = this.form.name.toUpperCase();
        this.panierService.ViderPanier();
    }
}
