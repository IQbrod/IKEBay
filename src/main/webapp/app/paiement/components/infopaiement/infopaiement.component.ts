import { Component, OnInit, Input } from '@angular/core';
import { PanierService } from 'app/panier/service/panier.service';
import { PaiementService } from 'app/paiement/paiement.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'jhi-infopaiement',
    templateUrl: './infopaiement.component.html',
    styles: []
})
export class InfoPaiementComponent implements OnInit {
    constructor(private paieServ: PaiementService, private panServ: PanierService) {}

    ngOnInit() {}

    Saveinfo(form: NgForm) {
        return;
    }
}
