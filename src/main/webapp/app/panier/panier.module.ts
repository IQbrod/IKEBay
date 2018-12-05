import { NgModule } from '@angular/core';
import { PanierComponent } from 'app/panier/component/smallPanier/smallPanier.component';
import { QuickAddComponent } from 'app/panier/component/quickAdd/quickAdd.component';
import { QuickRemoveComponent } from 'app/panier/component/quickRemove/quickRemove.component';
import { DetailPanierComponent } from 'app/panier/component/detailPanier/detailPanier.component';
import { CommonModule } from '@angular/common';
import { CartviewComponent } from 'app/panier/component/cartview/cartview.component';
import { RouterModule } from '@angular/router';
import { PanierRoute } from './panier.route';

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(PanierRoute)],
    declarations: [PanierComponent, QuickAddComponent, QuickRemoveComponent, DetailPanierComponent, CartviewComponent],
    exports: [PanierComponent, QuickAddComponent, QuickRemoveComponent, DetailPanierComponent, CartviewComponent]
})
export class PanierModule {}
