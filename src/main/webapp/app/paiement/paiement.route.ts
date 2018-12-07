import { Routes } from '@angular/router';
import { InfoPaiementComponent } from './components/infopaiement/infopaiement.component';

export const PaiementRoute: Routes = [
    {
        path: 'paiement',
        component: InfoPaiementComponent,
        data: {
            pageTitle: 'Payer'
        }
    }
];
