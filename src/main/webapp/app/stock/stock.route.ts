import { Routes } from '@angular/router';
import { DetailStockComponent } from './component/detailStock/detailStock.component';
import { ListStockComponent } from './component/list/listStock.component';

export const StockRoute: Routes = [
    {
        path: 'stock',
        // component: DetailStockComponent,
        component: ListStockComponent,
        data: {
            pageTitle: 'Stock'
        }
    }
];
