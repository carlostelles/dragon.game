import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardsComponent} from './cards/cards.component';
import {LayoutsModule} from '../layouts/layouts.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PagesRouting} from './pages.routing';
import {DetailComponent} from './detail/detail.component';
import {EditComponent} from './edit/edit.component';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import {SingupComponent} from './singup/singup.component';
import {SinginComponent} from './singin/singin.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutsModule,
    FormsModule,
    PagesRouting,
    ReactiveFormsModule,
    NgbRatingModule
  ],
  declarations: [
    CardsComponent,
    DetailComponent,
    EditComponent,
    SingupComponent,
    SinginComponent,
  ]
})
export class PagesModule {
}
