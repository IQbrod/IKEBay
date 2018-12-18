import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SERVER_API_URL } from 'app/app.constants';
import { Stock } from '../stock.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StockEntry } from '../model/stockEntry.model';
import { Principal } from 'app/core';

@Injectable({ providedIn: 'root' })
export class StockService {
    private stock: Map<Number, StockEntry>;
    private resourceUrl = SERVER_API_URL + 'api/stocks';
    private currentUserId: number;

    constructor(private principal: Principal, private http: HttpClient) {
        this.stock = new Map();
        /*this.listAllID().subscribe((ids: Number[]) => {
        // this.listUserStocks(principal.getId()).subscribe((ids: Number[]) => {
            ids.forEach((id: Number) => {
                const entry = new StockEntry(this, id, null);
                this.stock.set(id, entry);
            });
        });*/
        this.currentUserId = 0;
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

    loadUserStocks() {
        if (this.principal.getId() !== this.currentUserId) {
            this.stock = new Map();
            this.listUserStocks(this.principal.getId()).subscribe((ids: Number[]) => {
                ids.forEach((id: Number) => {
                    const entry = new StockEntry(this, id, null);
                    this.stock.set(id, entry);
                });
            });
            this.currentUserId = this.principal.getId();
        }
    }

    getStock(Id: Number): Observable<Stock> {
        return this.http.get<Stock>(`${this.resourceUrl}/${Id}`, { observe: 'response' }).pipe(map(res => res.body));
    }

    listAllID(): Observable<Number[]> {
        return this.http.get<Number[]>(this.resourceUrl + 'ID', { observe: 'response' }).pipe(map(res => res.body));
    }

    listUserStocks(Id: Number): Observable<Number[]> {
        return this.http.get<Number[]>(`${this.resourceUrl}User?id=${Id}`, { observe: 'response' }).pipe(map(res => res.body));
    }

    addItem(id: number, qte: number) {
        if (this.stock.has(id)) {
            // Ajout dans map
            const entry = this.stock.get(id);
            entry.stock.quantite += qte;
            this.stock.set(id, entry);
        }

        // Verification valeur != 0
        // if (this.stock.get(id).quantity === 0) {
        //     this.stock.delete(id);
        // }
    }

    removeItem(id: number, qte: number) {
        if (this.stock.has(id)) {
            if (this.stock.get(id).stock.quantite < qte) {
                qte = this.stock.get(id).stock.quantite;
            }
            this.addItem(id, -qte);
        } else {
            return;
        }
    }

    setQuantity(id: number, qte: number) {
        if (this.stock.has(id)) {
            const entry = this.stock.get(id);
            entry.stock.quantite = qte;
            this.stock.set(id, entry);
        }
    }
}
