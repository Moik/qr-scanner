import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScannerComponent } from './scanner/scanner.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, ScannerComponent, HomeComponent],
  imports: [BrowserModule, ZXingScannerModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
