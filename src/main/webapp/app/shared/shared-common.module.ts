import { NgModule } from '@angular/core';

import { IkebaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [IkebaySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [IkebaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class IkebaySharedCommonModule {}
