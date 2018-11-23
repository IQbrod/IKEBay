import { NgModule } from '@angular/core';
import { PanierComponent } from 'app/panier/component/smallPanier/smallPanier.component';
import { PanierService } from 'app/panier/service/panier.service';

@NgModule({
    imports: [],
    declarations: [PanierComponent],
    exports: [PanierComponent]
})
export class PanierModule {
    private pan: PanierService;
}
