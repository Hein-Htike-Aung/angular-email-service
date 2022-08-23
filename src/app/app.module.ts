import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToSystemComponent } from './to-system/to-system.component';
import { FromSystemComponent } from './from-system/from-system.component';

@NgModule({
  declarations: [AppComponent, ToSystemComponent, FromSystemComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
