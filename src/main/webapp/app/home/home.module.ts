import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IkeBaySharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';

import { PanierModule } from 'app/panier/panier.module';
import { PaiementModule } from 'app/paiement/paiement.module';
import { ProductModule } from './../product/product.module';
@NgModule({
    imports: [IkeBaySharedModule, RouterModule.forChild([HOME_ROUTE]), PanierModule, ProductModule, PaiementModule],
    declarations: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IkeBayHomeModule {}
