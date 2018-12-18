import { SidebarComponent } from 'app/categories/component/sidebar/sidebar.component';
import { CategorieService } from 'app/categories/service/categorie.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule],
    declarations: [SidebarComponent],
    exports: [SidebarComponent]
})
export class CategorieModule {
    private cserv: CategorieService;
}
