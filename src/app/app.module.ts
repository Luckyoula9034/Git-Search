import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
;
import { HttpClient } from '@angular/common/http';
import { ProfileService } from 'src/services/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClient
  ],
  providers: [ProfileService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
