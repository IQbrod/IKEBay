import { Component, OnInit, Input } from '@angular/core';
import { StockService } from 'app/stock/service/stock.service';
import { Stock } from 'app/stock/stock.model';
import { ProductService } from 'app/product/product.service';
import { Product } from 'app/product/product.model';

@Component({
    selector: 'jhi-detail-stock',
    templateUrl: './detailStock.component.html',
    styleUrls: ['detailStock.css']
})
export class DetailStockComponent implements OnInit {
    @Input() id: number;
    @Input() stock: Stock;
    quantite: number;
    constructor(private stockService: StockService, private productService: ProductService) {}

    ngOnInit() {}

    onKeydown(event) {
        if (event.key === 'Enter') {
            // alert('you just clicked enter');
            this.quantite = parseInt(event.target.value, 10);
            this.stockService.setQuantity(this.id, this.quantite);
        }
    }
}
