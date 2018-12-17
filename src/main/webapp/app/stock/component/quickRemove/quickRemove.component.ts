import { Component, OnInit, Input } from '@angular/core';
import { StockService } from 'app/stock/service/stock.service';

@Component({
    selector: 'jhi-stock-quick-remove',
    templateUrl: './quickRemove.component.html',
    styleUrls: ['quickRemove.css']
})
export class StockQuickRemoveComponent implements OnInit {
    @Input() public id: number;

    constructor(private stockService: StockService) {}

    ngOnInit() {}

    onClick() {
        this.stockService.removeItem(this.id, 1);
    }
}
