import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CardsComponent} from './cards/cards.component';
import {DetailComponent} from './detail/detail.component';
import {EditComponent} from './edit/edit.component';
import {SingupComponent} from './singup/singup.component';
import {SinginComponent} from './singin/singin.component';
import {AuthGuard} from '../shared/auth/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: 'card', pathMatch: 'full'},
  {path: 'card', component: CardsComponent, canActivate: [AuthGuard]},
  {path: 'card/:id', component: DetailComponent, canActivate: [AuthGuard]},
  {path: 'card/:id/edit', component: EditComponent, canActivate: [AuthGuard]},
  {path: 'edit', component: EditComponent, canActivate: [AuthGuard]},
  {path: 'singin', component: SinginComponent},
  {path: 'singup', component: SingupComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRouting {
}
