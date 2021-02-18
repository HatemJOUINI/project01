import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { InlineSVGModule } from 'ng-inline-svg';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';
import { MenuComponent } from './menu/menu.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientComponent } from './client/client.component';
import { LayoutComponent } from './layout/layout.component';
import { NotificationComponent } from './layout/notification/notification.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarModule } from 'ng-sidebar';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NotfoundComponent,
    ClientComponent,
    LayoutComponent,
    NotificationComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    NgProgressModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    NgProgressRouterModule,
    InlineSVGModule.forRoot(),
    SidebarModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
