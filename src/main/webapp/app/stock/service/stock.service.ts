import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SERVER_API_URL } from 'app/app.constants';
import { Stock } from '../stock.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StockEntry } from '../model/stockEntry.model';

@Injectable({ providedIn: 'root' })
export class StockService {
    private stock;
    private resourceUrl = SERVER_API_URL + 'api/stocks';

    constructor(private http: HttpClient) {
        this.stock = new Map();
        this.listAllID().subscribe((ids: Number[]) => {
            ids.forEach((id: Number) => {
                const entry = new StockEntry(this, id, null);
                this.stock.set(id, entry);
            });
        });
    }

    getMap() {
        return this.stock;
    }

    // create(stock: Stock): Observable<HttpResponse<Stock>> {
    //     return this.http.post<Stock>(this.resourceUrl, stock, { observe: 'response' });
    // }

    // delete(Id: number): Observable<HttpResponse<any>> {
    //     return this.http.delete(`${this.resourceUrl}/${Id}`, { observe: 'response' });
    // }

    getStock(Id: Number): Observable<Stock> {
        return this.http.get<Stock>(`${this.resourceUrl}/${Id}`, { observe: 'response' }).pipe(map(res => res.body));
    }

    listAllID(): Observable<Number[]> {
        return this.http.get<Number[]>(this.resourceUrl + 'ID', { observe: 'response' }).pipe(map(res => res.body));
    }

    addItem(id: number, qte: number) {
        if (this.stock.has(id)) {
            // Ajout dans map
            const entry = this.stock.get(id);
            entry.stock.quantite += qte;
            this.stock.set(id, entry);
        }

        // Verification valeur != 0
        if (this.stock.get(id).quantity === 0) {
            this.stock.delete(id);
        }
    }

    // removeItem(id: number, qte: number) {
    //     if (this.stock.has(id)) {
    //         if (this.stock.get(id).quantity < qte) {
    //             qte = this.stock.get(id).quantity;
    //         }
    //         this.addItem(id, -qte);
    //     } else {
    //         return;
    //     }
    // }
}
