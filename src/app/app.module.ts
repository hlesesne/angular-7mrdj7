import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {PdfJsViewerModule} from 'ng2-pdfjs-viewer';

@NgModule({
  imports:      [ BrowserModule, FormsModule, PdfJsViewerModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
