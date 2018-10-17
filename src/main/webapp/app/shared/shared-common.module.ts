import { NgModule } from '@angular/core';

import { IkeBaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [IkeBaySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [IkeBaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class IkeBaySharedCommonModule {}
