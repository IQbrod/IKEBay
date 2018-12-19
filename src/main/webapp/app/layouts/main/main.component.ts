import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, NavigationEnd } from '@angular/router';

import { Title } from '@angular/platform-browser';
import { PanierService } from 'app/panier/service/panier.service';

@Component({
    selector: 'jhi-main',
    templateUrl: './main.component.html',
    styleUrls: ['main.component.css']
})
export class JhiMainComponent implements OnInit {
    constructor(private titleService: Title, private router: Router, private panierService: PanierService) {}

    private getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
        let title: string = routeSnapshot.data && routeSnapshot.data['pageTitle'] ? routeSnapshot.data['pageTitle'] : 'ikeBayApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.titleService.setTitle(this.getPageTitle(this.router.routerState.snapshot.root));
            }
        });

        /* Chargement du Panier */
        for (let i = 0; i < sessionStorage.length; i++) {
            const sid = sessionStorage.key(i);
            if (sid.startsWith('pan-')) {
                const id = sid.replace('pan-', '');
                const value = sessionStorage.getItem(sid);
                console.log(parseInt(id, 10), parseInt(value, 10));
                this.panierService.setItem(parseInt(id, 10), parseInt(value, 10));
            }
        }
    }
}
