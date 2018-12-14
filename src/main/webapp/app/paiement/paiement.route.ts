import { Routes } from '@angular/router';
import { InfoPaiementComponent } from './components/infopaiement/infopaiement.component';
import { FinPaiementComponent } from './components/finpaiement/finpaiement.component';

export const PaiementRoute: Routes = [
    {
        path: 'paiement',
        component: InfoPaiementComponent,
        data: {
            pageTitle: 'Payer'
        }
    },
    {
        path: 'paiementvalide',
        component: FinPaiementComponent,
        data: {
            pageTitle: 'Validé'
        }
    }
];
