import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from "./layout/layout.module";
import { ProfileGalleryComponent } from './profile-gallery/profile-gallery.component';
import { HttpClientModule} from "@angular/common/http";
import { NameFilterPipe } from './name-filter.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SetupDateComponent } from './date/setup-date/setup-date.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileGalleryComponent,
    NameFilterPipe,
    SetupDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
