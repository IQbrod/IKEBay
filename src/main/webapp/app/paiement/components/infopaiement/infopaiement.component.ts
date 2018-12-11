import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaiementInfos, PaymentType } from 'app/paiement/paiementinfo.model';
import { debug } from 'util';

@Component({
    selector: 'jhi-infopaiement',
    templateUrl: './infopaiement.component.html',
    styles: []
})
export class InfoPaiementComponent implements OnInit {
    formdata: PaiementInfos;

    constructor() {}

    ngOnInit() {
        this.formdata = new PaiementInfos(PaymentType.creditcard, '', '', '', '');
    }

    validateCreditCardNumber(): boolean {
        // renvoie true si le numéro de carte est valide
        return this.formdata.cardnum.replace(/\s+/g, '').length === 16 && /^\d+$/.test(this.formdata.cardnum.replace(/\s+/g, ''));
    }

    validateExpiry(): boolean {
        return (
            this.formdata.expiry.replace(/[/]+/g, '').length === 4 &&
            /^\d+$/.test(this.formdata.expiry.replace(/[/]+/g, '')) &&
            parseInt(this.formdata.expiry.replace(/[/]+/g, ''), 10) / 100 < 13
        );
    }

    validateCVC(): boolean {
        return this.formdata.cvc.length === 3 && /^\d+$/.test(this.formdata.cvc);
    }
    validateExpiryDate(): boolean {
        // todo : tester le mois et l'année (mois : nombre /1000 <13;année : nombre%100>=annéeactuelle%100)
        if (this.validateExpiry()) {
            console.log(new Date().getMonth());
            return (
                parseInt(this.formdata.expiry.replace(/[/]+/g, ''), 10) % 100 > new Date().getFullYear() % 100 ||
                (parseInt(this.formdata.expiry.replace(/[/]+/g, ''), 10) / 100 >= new Date().getMonth() + 1 &&
                    parseInt(this.formdata.expiry.replace(/[/]+/g, ''), 10) % 100 === new Date().getFullYear() % 100)
            );
        } else {
            return true;
        }
    }

    saveinfo(form: NgForm) {
        console.log(this.formdata);
        return;
    }
}
