import { NgModule } from '@angular/core';
import { PanierComponent } from 'app/panier/component/smallPanier/smallPanier.component';
import { QuickAddComponent } from 'app/panier/component/quickAdd/quickAdd.component';
import { QuickRemoveComponent } from 'app/panier/component/quickRemove/quickRemove.component';

@NgModule({
    imports: [],
    declarations: [PanierComponent, QuickAddComponent, QuickRemoveComponent],
    exports: [PanierComponent, QuickAddComponent, QuickRemoveComponent]
})
export class PanierModule {}
