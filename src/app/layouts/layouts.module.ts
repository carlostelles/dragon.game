import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContentLayoutComponent} from './content/content-layout.component';
import {FullLayoutComponent} from './full/full-layout.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [
        ContentLayoutComponent,
        FullLayoutComponent
    ],
    exports: [
        ContentLayoutComponent,
        FullLayoutComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class LayoutsModule {
}
