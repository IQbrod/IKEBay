import { Routes } from '@angular/router';
import { DetailPanierComponent } from './component/detailPanier/detailPanier.component';

export const PanierRoute: Routes = [
    {
        path: 'panier',
        component: DetailPanierComponent,
        data: {
            pageTitle: 'Panier'
        }
    }
];
