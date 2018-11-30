import { NgModule } from '@angular/core';
import { PanierComponent } from 'app/panier/component/smallPanier/smallPanier.component';
import { QuickAddComponent } from 'app/panier/component/quickAdd/quickAdd.component';
import { QuickRemoveComponent } from 'app/panier/component/quickRemove/quickRemove.component';
import { DetailComponent } from 'app/panier/component/detailPanier/detailPanier.component';

@NgModule({
    imports: [],
    declarations: [PanierComponent, QuickAddComponent, QuickRemoveComponent, DetailComponent],
    exports: [PanierComponent, QuickAddComponent, QuickRemoveComponent, DetailComponent]
})
export class PanierModule {}
