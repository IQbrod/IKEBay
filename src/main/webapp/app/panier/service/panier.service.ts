import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PanierService {
    private panier;
    private totQte;
    public qtePublisher;

    constructor() {
        this.panier = new Map();
        this.totQte = 0;
        this.qtePublisher = new BehaviorSubject(this.totQte);
    }

    addItem(id, qte) {
        this.panier[id] += qte;
        this.totQte += qte;
        this.publishQte(this.totQte);
    }

    private publishQte(message: number) {
        this.qtePublisher.next(message);
    }
}
