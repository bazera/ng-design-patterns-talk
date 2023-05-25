import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway/payment-gateway.component';
import { FeatureComponent } from './components/feature/feature.component';
import { SortingComponent } from './components/sorting/sorting.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentGatewayComponent,
    FeatureComponent,
    SortingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
