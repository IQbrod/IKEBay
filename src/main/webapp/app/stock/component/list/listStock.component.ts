import { Component, OnInit, Input } from '@angular/core';
import { StockService } from 'app/stock/service/stock.service';
import { StockEntry } from 'app/stock/model/stockEntry.model';

@Component({
    selector: 'jhi-liststock',
    templateUrl: './listStock.component.html',
    styleUrls: ['listStock.css']
})
export class ListStockComponent implements OnInit {
    @Input() public stock: Map<Number, StockEntry>;

    constructor(private stockService: StockService) {}

    ngOnInit() {
        this.stockService.loadUserStocks();
        this.stock = this.stockService.getMap();
    }
}
