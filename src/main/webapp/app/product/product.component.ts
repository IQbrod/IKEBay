import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-test-boot',
    templateUrl: './test-boot.component.html',
    styleUrls: ['./test-boot.component.css']
})
export class TestBootComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    btnClick = function() {};
}
