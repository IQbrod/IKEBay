import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    /*btnClick= function () {
    this.router.navigateByUrl('/GoToPanier');
  }; */

    btnClick2 = function() {
        this.router.navigateByUrl('/HomePage');
    };
}
