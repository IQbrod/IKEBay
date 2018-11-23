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
        this.panier[id] += qte;
        this.totQte += qte;
        this.publishQte(this.totQte);
    }

    private publishQte(message: number) {
        this.qteSource.next(message);
    }
}
