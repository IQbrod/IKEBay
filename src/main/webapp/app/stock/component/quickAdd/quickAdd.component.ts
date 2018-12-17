import { Component, OnInit, Input } from '@angular/core';
import { StockService } from 'app/stock/service/stock.service';

@Component({
    selector: 'jhi-stock-quick-add',
    templateUrl: './quickAdd.component.html',
    styleUrls: ['quickAdd.css']
})
export class StockQuickAddComponent implements OnInit {
    @Input() public id: number;

    constructor(private stockService: StockService) {}

    ngOnInit() {}

    onClick() {
        this.stockService.addItem(this.id, 1);
    }
}
