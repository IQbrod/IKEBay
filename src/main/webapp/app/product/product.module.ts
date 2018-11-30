import { NgModule } from '@angular/core';
import { SimpleviewComponent } from 'app/product/views/simpleview/simpleview.component';
import { ProductService } from 'app/product/product.service';
import { ProductlistComponent } from './views/list/productlist.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [SimpleviewComponent, ProductlistComponent],
    exports: [SimpleviewComponent, ProductlistComponent]
})
export class ProductModule {
    private pserv: ProductService;
}
