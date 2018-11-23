import { Component, OnInit, Input } from '@angular/core';
import { PanierService } from 'app/panier/service/panier.service';

@Component({
    selector: 'jhi-quick-add',
    templateUrl: './quickAdd.component.html',
    styles: []
})
export class QuickAddComponent implements OnInit {
    @Input() private qte: number;
    @Input() private id: number;
    constructor(private panServ: PanierService) {}

    ngOnInit() {
        this.panServ.qtePublisher.subscribe(message => (this.qte = message));
    }

    onClick() {
        this.panServ.addItem(this.id, 1);
    }
}
