import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ToggleFullscreenDirective} from './directives/toggle-fullscreen.directive';
import {SidebarDirective} from './directives/sidebar.directive';
import {SidebarLinkDirective} from './directives/sidebarlink.directive';
import {SidebarListDirective} from './directives/sidebarlist.directive';
import {SidebarAnchorToggleDirective} from './directives/sidebaranchortoggle.directive';
import {SidebarToggleDirective} from './directives/sidebartoggle.directive';
import {OrderByPipe} from './pipes/order-by.pipe';

@NgModule({
  exports: [
    CommonModule,
    FooterComponent,
    NavbarComponent,
    ToggleFullscreenDirective,
    SidebarDirective,
    NgbModule,
    TranslateModule,
    OrderByPipe
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    TranslateModule,
    PerfectScrollbarModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    ToggleFullscreenDirective,
    SidebarDirective,
    SidebarLinkDirective,
    SidebarListDirective,
    SidebarAnchorToggleDirective,
    SidebarToggleDirective,
    OrderByPipe,
  ]
})
export class SharedModule {
}
