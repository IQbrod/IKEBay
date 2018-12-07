import { Component, OnInit, Input } from '@angular/core';
import { PanierService } from 'app/panier/service/panier.service';

@Component({
    selector: 'jhi-quick-add',
    templateUrl: './quickAdd.component.html',
    styleUrls: ['quickAdd.css']
})
export class QuickAddComponent implements OnInit {
    @Input() public id: number;
    constructor(private panServ: PanierService) {}

    ngOnInit() {}

    onClick() {
        this.panServ.addItem(this.id, 1);
    }
}
