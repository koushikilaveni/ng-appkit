import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';

import {InputOverviewExample} from './app/input-overview-example';
import {ApkInputComponent} from './app/components/apk-input/apk-input.component';

import {ApkSelectComponent} from './app/components/apk-select/apk-select.component';

import {ApkButtonComponent} from './app/components/apk-button/apk-button.component';

import {ApkHeaderComponent} from './app/components/apk-header/apk-header.component';

import {ApkFooterComponent} from './app/components/apk-footer/apk-footer.component';

import {PageComponent} from './app/page/page.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [InputOverviewExample],
  declarations: [InputOverviewExample, ApkInputComponent, ApkSelectComponent , ApkButtonComponent, ApkHeaderComponent, ApkFooterComponent, PageComponent],
  bootstrap: [PageComponent],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */