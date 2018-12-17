import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from 'app/stock/component/smallStock/smallStock.component';
import { DetailStockComponent } from 'app/stock/component/detailStock/detailStock.component';
import { RouterModule } from '@angular/router';
import { StockRoute } from './stock.route';
import { StockService } from './service/stock.service';
import { ListStockComponent } from './component/list/listStock.component';
import { StockQuickAddComponent } from './component/quickAdd/quickAdd.component';
@NgModule({
    imports: [CommonModule, RouterModule.forRoot(StockRoute)],
    declarations: [StockComponent, DetailStockComponent, ListStockComponent, StockQuickAddComponent],
    exports: [StockComponent, DetailStockComponent, ListStockComponent, StockQuickAddComponent]
})
export class StockModule {
    private sserv: StockService;
}
