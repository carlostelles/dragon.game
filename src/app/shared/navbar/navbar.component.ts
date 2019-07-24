import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import {LayoutService} from '../services/layout.service';
import {ConfigService} from '../services/config.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  toggleClass = 'ft-maximize';
  placement = 'bottom-right';
  @Output() toggleHideSidebar = new EventEmitter<Object>();
  config: any = {};

  constructor(
    public translate: TranslateService,
    private layoutService: LayoutService,
    private configService: ConfigService,
    private authService: AuthService
  ) {
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en');
  }

  ngOnInit() {
    this.config = this.configService.templateConf;
  }

  ngAfterViewInit() {
    if (this.config.layout.dir) {
      const dir = this.config.layout.dir;
      if (dir === 'rtl') {
        this.placement = 'bottom-left';
      } else if (dir === 'ltr') {
        this.placement = 'bottom-right';
      }
    }
  }

  ToggleClass() {
    if (this.toggleClass === 'ft-maximize') {
      this.toggleClass = 'ft-minimize';
    } else {
      this.toggleClass = 'ft-maximize';
    }
  }

  onLogout() {
    this.authService.logout();
  }
}
