import './vendor.ts';

import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { Ng2Webstorage, LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { JhiEventManager } from 'ng-jhipster';

import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { IkeBaySharedModule } from 'app/shared';
import { IkeBayCoreModule } from 'app/core';
import { IkeBayAppRoutingModule } from './app-routing.module';
import { IkeBayHomeModule } from './home/home.module';
import { IkeBayAccountModule } from './account/account.module';
import { IkeBayEntityModule } from './entities/entity.module';
import * as moment from 'moment';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent, NavbarComponent, FooterComponent, PageRibbonComponent, ErrorComponent } from './layouts';
import { ProductService } from './product/product.service';
import { PanierService } from './panier/service/panier.service';
import { PanierModule } from 'app/panier/panier.module';
import { PaiementService } from './paiement/paiement.service';
import { StockModule } from 'app/stock/stock.module';
import { StockService } from './stock/service/stock.service';
import { SidebarComponent } from 'app/categories/component/sidebar/sidebar.component';
import { CategorieService } from 'app/categories/service/categorie.service';
import { CategorieModule } from 'app/categories/categorie.module';

@NgModule({
    imports: [
        BrowserModule,
        IkeBayAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
        IkeBaySharedModule,
        IkeBayCoreModule,
        IkeBayHomeModule,
        IkeBayAccountModule,
        IkeBayEntityModule,
        PanierModule,
        StockModule,
        CategorieModule
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
            deps: [LocalStorageService, SessionStorageService]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true,
            deps: [Injector]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true,
            deps: [JhiEventManager]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true,
            deps: [Injector]
        },
        PanierService,
        ProductService,
        PaiementService,
        StockService,
        CategorieService
    ],
    bootstrap: [JhiMainComponent]
})
export class IkeBayAppModule {
    constructor(private dpConfig: NgbDatepickerConfig) {
        this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
    }
}
