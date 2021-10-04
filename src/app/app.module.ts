import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Taza/listar/listar.component';
import { AddComponent } from './Taza/add/add.component';
import { EditComponent } from './Taza/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { AddOComponent } from './Order/add-o/add-o.component';
import { ListarOComponent } from './Order/listar-o/listar-o.component';
import { EditOComponent } from './Order/edit-o/edit-o.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    AddOComponent,
    ListarOComponent,
    EditOComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
