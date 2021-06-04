import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageToMosaicComponent } from './image-to-mosaic/image-to-mosaic.component';
import { AfterImageComponent } from './after-image/after-image.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageToMosaicComponent,
    AfterImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
