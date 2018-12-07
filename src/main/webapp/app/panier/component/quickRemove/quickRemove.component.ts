import { Component, OnInit, Input } from '@angular/core';
import { PanierService } from 'app/panier/service/panier.service';

@Component({
    selector: 'jhi-quick-rem',
    templateUrl: './quickRemove.component.html',
    styles: []
})
export class QuickRemoveComponent implements OnInit {
    @Input() public id: number;
    constructor(private panServ: PanierService) {}

    ngOnInit() {}

    onClick() {
        this.panServ.removeItem(this.id, 1);
    }
}
