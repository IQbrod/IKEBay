import { NgModule } from '@angular/core';
import { PanierComponent } from 'app/panier/component/smallPanier/smallPanier.component';
import { QuickAddComponent } from 'app/panier/component/quickAdd/quickAdd.component';

@NgModule({
    imports: [],
    declarations: [PanierComponent, QuickAddComponent],
    exports: [PanierComponent, QuickAddComponent]
})
export class PanierModule {}
