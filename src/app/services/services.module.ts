import { NgModule, InjectionToken } from '@angular/core';
import { ProviderAst } from '@angular/compiler';

export const API_CONFIG = new InjectionToken('ApiConfigToken');

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    { provide: API_CONFIG, useValue: 'http://localhost:3000/' }
  ]
})
export class ServicesModule { }
