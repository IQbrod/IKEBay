import { ProductService } from './../../product/product.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PanierEntry } from '../model/panierentry.model';

@Injectable()
export class PanierService {
    private panier;
    private totQte;
    private qteSource;
    public qtePublisher;

    constructor(private productService: ProductService) {
        this.panier = new Map();
        this.totQte = 0;
        this.qteSource = new BehaviorSubject<number>(this.totQte);
        this.qtePublisher = this.qteSource.asObservable();
    }

    addItem(id: number, qte: number) {
        if (this.panier.has(id)) {
            // Ajout dans map
            const entry = this.panier.get(id);
            entry.quantity = entry.quantity + qte;
            this.panier.set(id, entry);
        } else {
            // Creation clé dans map
            const entry = new PanierEntry(this.productService, id, null, qte);
            this.panier.set(id, entry);
        }

        // Verification valeur != 0
        if (this.panier.get(id).quantity === -1) {
            this.panier.delete(id);
        }

        this.totQte += qte;
        this.publishQte(this.totQte);
    }

    removeItem(id: number, qte: number) {
        if (this.panier.has(id)) {
            if (this.panier.get(id).quantity !== 0 && this.panier.get(id).quantity < qte) {
                qte = this.panier.get(id).quantity;
            }
            this.addItem(id, -qte);
        } else {
            return;
        }
    }

    getPanier() {
        return this.panier;
    }

    ViderPanier() {
        this.panier.clear();
        this.totQte = 0;
        this.publishQte(this.totQte);
    }

    private publishQte(message: number) {
        this.qteSource.next(message);
    }
}
