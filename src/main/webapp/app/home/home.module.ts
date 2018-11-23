import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IkeBaySharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { PanierComponent } from 'app/panier/panier.component';

@NgModule({
    imports: [IkeBaySharedModule, RouterModule.forChild([HOME_ROUTE])],
    declarations: [HomeComponent, PanierComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IkeBayHomeModule {}
