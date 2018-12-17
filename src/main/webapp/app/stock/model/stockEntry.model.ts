import { Stock } from '../stock.model';
import { StockService } from '../service/stock.service';
export interface IStockEntry {
    id?: Number;
    stock?: Stock;
}

export class StockEntry implements IStockEntry {
    constructor(private stockService: StockService, public id?: Number, public stock?: Stock) {
        this.id = id ? id : null;
        id ? this.stockService.getStock(id).subscribe((stos: Stock) => (this.stock = stos)) : (this.stock = null);
    }
}
