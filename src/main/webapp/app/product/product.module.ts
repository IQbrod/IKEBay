import { PanierModule } from './../panier/panier.module';
import { DetailedviewComponent } from './views/detailedview/detailedview.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SimpleviewComponent } from 'app/product/views/simpleview/simpleview.component';
import { ProductService } from 'app/product/product.service';
import { ProductlistComponent } from './views/list/productlist.component';
import { CommonModule } from '@angular/common';
import { ProductRoute } from './product.route';
import { ProductPipe } from 'app/product/pipes/product.pipe';

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(ProductRoute), PanierModule],
    declarations: [SimpleviewComponent, DetailedviewComponent, ProductlistComponent, ProductPipe],
    exports: [SimpleviewComponent, DetailedviewComponent, ProductlistComponent]
})
export class ProductModule {
    private pserv: ProductService;
}
