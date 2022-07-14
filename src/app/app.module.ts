import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { ListComponent } from './list/list.component';
import { BmaComponent } from './bma/bma.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SlidebarComponent,
    ListComponent,
    BmaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
