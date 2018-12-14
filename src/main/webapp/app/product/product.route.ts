import { Routes } from '@angular/router';
import { ProductlistComponent } from './views/list/productlist.component';
import { DetailedviewComponent } from './views/detailedview/detailedview.component';

export const ProductRoute: Routes = [
    {
        path: 'products',
        component: ProductlistComponent,
        data: {
            pageTitle: 'Catalogue'
        }
    },
    {
        path: 'products?name=:name',
        component: ProductlistComponent,
        data: {
            pageTitle: 'Catalogue'
        }
    },
    {
        path: 'products/:id',
        component: DetailedviewComponent,
        data: {
            pageTitle: 'Produit'
        }
    }
];
