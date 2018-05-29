import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import {CdkTreeModule} from '@angular/cdk/tree';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { TreeFlatOverviewExample } from './tree-flat-overview-example/tree-flat-overview-example';
import { ListarArchivosDirectorioComponent } from './listar-archivos-directorio/listar-archivos-directorio.component';
import { wtf , cow } from './listar-archivos-directorio/listar.js';
import { ColumnasComponent } from './columnas/columnas.component';
import { VerticalButtonsComponent } from './vertical-buttons/vertical-buttons.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ButtonsAddRemoveComponent } from './buttons-add-remove/buttons-add-remove.component';

//import { require } from 'require';

//enableProdMode();

@NgModule({

  

  declarations: [
    AppComponent,
    TreeFlatOverviewExample,
    ListarArchivosDirectorioComponent,
    ColumnasComponent,
    VerticalButtonsComponent,
    ButtonsAddRemoveComponent,
    

    
  ],
  imports: [
    BrowserModule,
    CdkTreeModule,
    MatButtonModule,
    MatTreeModule,
    MatIconModule,
    MatButtonToggleModule
      
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
