import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './core/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {NzNotificationService} from "ng-zorro-antd/notification";
import {NzCardModule} from "ng-zorro-antd/card";
import {MyDriveModule} from "./pages/my-drive/my-drive.module";

registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    NzCardModule,
    MyDriveModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: ru_RU},
    NzNotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
