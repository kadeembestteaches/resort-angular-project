import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { ResortItemComponent } from './resort-item/resort-item.component';
import { ResortListComponent } from './resort-list/resort-list.component';

@NgModule({
  declarations: [
    AppComponent,
   HeaderComponent,
    FooterComponent,
    HeroComponent, 
    ResortItemComponent,
    ResortListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
