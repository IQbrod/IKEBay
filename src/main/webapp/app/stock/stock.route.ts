import { Routes } from '@angular/router';
import { ListStockComponent } from './component/list/listStock.component';
import { UserRouteAccessService } from 'app/core';

export const StockRoute: Routes = [
    {
        path: 'stock',
        // component: DetailStockComponent,
        component: ListStockComponent,
        data: {
            authorities: ['ROLE_VENDOR'],
            pageTitle: 'Stock'
        },
        canActivate: [UserRouteAccessService]
    }
];
