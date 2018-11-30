import { NgModule } from '@angular/core';
import { PanierComponent } from 'app/panier/component/smallPanier/smallPanier.component';
import { QuickAddComponent } from 'app/panier/component/quickAdd/quickAdd.component';
import { QuickRemoveComponent } from 'app/panier/component/quickRemove/quickRemove.component';
import { DetailComponent } from 'app/panier/component/detailPanier/detailPanier.component';
import { CommonModule } from '@angular/common';
import { CartviewComponent } from 'app/panier/component/cartview/cartview.component';

@NgModule({
    imports: [CommonModule],
    declarations: [PanierComponent, QuickAddComponent, QuickRemoveComponent, DetailComponent, CartviewComponent],
    exports: [PanierComponent, QuickAddComponent, QuickRemoveComponent, DetailComponent, CartviewComponent]
})
export class PanierModule {}
