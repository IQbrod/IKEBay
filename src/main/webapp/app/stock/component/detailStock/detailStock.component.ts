import { Component, OnInit, Input } from '@angular/core';
import { StockService } from 'app/stock/service/stock.service';
import { Stock } from 'app/stock/stock.model';

@Component({
    selector: 'jhi-detail-stock',
    templateUrl: './detailStock.component.html',
    styleUrls: ['detailStock.css']
})
export class DetailStockComponent implements OnInit {
    @Input() id: Number;
    @Input() stock: Stock;

    constructor(private stockService: StockService) {}

    ngOnInit() {}
}
