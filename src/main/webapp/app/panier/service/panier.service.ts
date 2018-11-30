import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PanierService {
    private panier;
    private totQte;
    private qteSource;
    public qtePublisher;

    constructor() {
        this.panier = new Map();
        this.totQte = 0;
        this.qteSource = new BehaviorSubject<number>(this.totQte);
        this.qtePublisher = this.qteSource.asObservable();
    }

    addItem(id, qte) {
        if (this.panier.has(id)) {
            // Ajout dans map
            this.panier.set(id, this.panier.get(id) + qte);
        } else {
            // Creation clé dans map
            this.panier.set(id, qte);
        }
        this.totQte += qte;
        this.publishQte(this.totQte);
    }

    removeItem(id, qte) {
        if (this.panier.has(id)) {
            if (this.panier.get(id) < qte) {
                qte = this.panier.get(id);
            }
            this.addItem(id, -qte);
        } else {
            return;
        }
    }

    private publishQte(message: number) {
        this.qteSource.next(message);
    }
}
