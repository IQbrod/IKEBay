import { Component, OnInit, Input } from '@angular/core';
import { StockService } from 'app/stock/service/stock.service';

@Component({
    selector: 'jhi-stock',
    templateUrl: './smallStock.component.html',
    styleUrls: ['smallStock.css']
})
export class StockComponent implements OnInit {
    constructor(private stockServ: StockService) {}

    ngOnInit() {}
}
