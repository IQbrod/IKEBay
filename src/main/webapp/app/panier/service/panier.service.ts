import { ProductService } from './../../product/product.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PanierEntry } from '../model/panierentry.model';

@Injectable()
export class PanierService {
    private panier: Map<number, PanierEntry>;
    private totQte: number;
    private qteSource: BehaviorSubject<number>;
    public qtePublisher: Observable<number>;

    constructor(private productService: ProductService) {
        this.panier = new Map();
        this.totQte = 0;
        this.qteSource = new BehaviorSubject<number>(this.totQte);
        this.qtePublisher = this.qteSource.asObservable();
    }

    setItem(id: number, qte: number) {
        const entry = new PanierEntry(this.productService, id, null, qte);
        this.panier.set(id, entry);

        this.totQte += qte;
        this.publishQte(this.totQte);
    }

    addItem(id: number, qte: number) {
        let entry;
        if (this.panier.has(id)) {
            // Ajout dans map
            entry = this.panier.get(id);
            entry.quantity = entry.quantity + qte;
            this.panier.set(id, entry);
        } else {
            // Creation clé dans map
            entry = new PanierEntry(this.productService, id, null, qte);
            this.panier.set(id, entry);
        }
        // Ajout Session
        console.log(entry.quantity);
        console.log(entry.quantity.toString());
        console.log('pan-' + id.toString(), entry.quantity.toString());
        sessionStorage.setItem('pan-' + id.toString(), entry.quantity.toString());

        // Verification valeur != 0
        if (this.panier.get(id).quantity === -1) {
            this.panier.delete(id);
            // Suppression Session
            sessionStorage.removeItem('pan-' + id.toString());
        } else {
            this.totQte += qte;
            this.publishQte(this.totQte);
        }
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
        // Vider Session
        let i = sessionStorage.length;
        while (i--) {
            const key = sessionStorage.key(i);
            if (key.startsWith('pan-')) {
                sessionStorage.removeItem(key);
            }
        }

        this.panier.clear();
        this.totQte = 0;
        this.publishQte(this.totQte);
    }

    private publishQte(message: number) {
        this.qteSource.next(message);
    }
}
