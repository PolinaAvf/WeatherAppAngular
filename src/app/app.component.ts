import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  template: `<header>

  <div class="page-header">
  <div class="container">
      <div class="row">
          <div class="col-12">
              <div class="page-caption">
                  <div style="background-color:#b6bfc8;"><h1 class="page-title">{{ 'demo.title' | translate }}</h1></div>
              </div>
              <div>
                   <button class="btn btn-primary" (click)="useLanguage('en')">En</button>
              <button class="btn btn-primary" (click)="useLanguage('sl')">Sl</button>
              </div>
              <app-home></app-home>
          </div>
      </div>
  </div>
</div>

            </header>

             `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'translation-demo';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
}
useLanguage(language: string) {
  this.translate.use(language);
}
}
