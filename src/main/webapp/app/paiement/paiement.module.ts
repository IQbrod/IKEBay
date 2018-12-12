import { FormsModule } from '@angular/forms';
import { InfoPaiementComponent } from './components/infopaiement/infopaiement.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaiementRoute } from './paiement.route';
import { FinPaiementComponent } from './components/finpaiement/finpaiement.component';

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(PaiementRoute), FormsModule],
    declarations: [InfoPaiementComponent, FinPaiementComponent],
    exports: [InfoPaiementComponent, FinPaiementComponent]
})
export class PaiementModule {}
