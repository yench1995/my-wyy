import { PagesModule } from './../pages/pages.module';
import { ShareModule } from './../share/share.module';
import { ServicesModule } from './../services/services.module';
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';


registerLocaleData(zh);

// 
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServicesModule,
    PagesModule,
    ShareModule,
    AppRoutingModule,
  ],
  exports: [
    ShareModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],

})
export class CoreModule {
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    // CoreModule只能被AppModule引入
    if (parentModule) {
      throw new Error('CoreModule can only be import by AppModule')
    }
  }
}
