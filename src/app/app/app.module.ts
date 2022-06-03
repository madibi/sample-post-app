import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './home/home.component';
import { environment } from '@environments/environment';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BaseUrlInterceptor} from "@commons/interceptors/base-url.interceptor";
import {FormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {baseReducers, metaReducers} from "@commons/store/_base/_base.reducer";
import {PostEffects} from "@commons/store/post/post.effect";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {CatchErrorInterceptor} from "@commons/interceptors/catch-error.interceptor";
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ThemeToggleModule} from "@commons/components/theme-toggle/theme-toggle.module";
import {AppEffects} from "@commons/store/app/app.effect";
import {ButtonModule} from "@commons/components/button/button.module";
import {MasterComponent} from "@app/app/master/master.component";
import {IconModule} from "@commons/components/icon/icon.module";

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(baseReducers, {metaReducers}),
    EffectsModule.forRoot([
      AppEffects,
      PostEffects,
    ]),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ThemeToggleModule,
    ButtonModule,
    IconModule,
  ],
  providers: [
    { provide: 'BASE_API_URL', useValue: environment.serverUrl },
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CatchErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
