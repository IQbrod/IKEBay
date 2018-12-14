import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'app/product/product.model';

@Pipe({
    name: 'nst'
})
export class ProductPipe implements PipeTransform {
    transform(items: Product[], filter: Product): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter((item: Product) => this.applyFilter(item, filter));
    }

    applyFilter(prod: Product, filter: Product): boolean {
        for (const field in filter) {
            if (filter[field]) {
                if (typeof filter[field] === 'string') {
                    if (prod[field].toLowerCase().indexOf(prod[field].toLowerCase()) === -1) {
                        return false;
                    }
                } else if (typeof filter[field] === 'number') {
                    if (prod[field] !== filter[field]) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}
