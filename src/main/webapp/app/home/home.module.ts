import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IkeBaySharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { PanierModule } from 'app/panier/panier.module';

@NgModule({
    imports: [IkeBaySharedModule, RouterModule.forChild([HOME_ROUTE]), PanierModule],
    declarations: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IkeBayHomeModule {}
