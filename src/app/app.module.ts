import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DealerFinanceComponent } from './dealer-finance/dealer-finance.component';
import { VendorFinanceComponent } from './vendor-finance/vendor-finance.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { SignInComponent } from './shared/sign-in/sign-in.component';
import { LogInComponent } from './shared/log-in/log-in.component';
import { ResetComponent } from './shared/reset/reset.component';
import { ManageImComponent } from './vendor-finance/manage-im/manage-im.component';
import { ListOfImComponent } from './vendor-finance/manage-im/list-of-im/list-of-im.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DealerFinanceComponent,
    VendorFinanceComponent,
    CustomerSupportComponent,
    SignInComponent,
    LogInComponent,
    ResetComponent,
    ManageImComponent,
    ListOfImComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
