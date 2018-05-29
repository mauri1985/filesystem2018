import { Component, OnInit } from '@angular/core';
import {cow,wtf} from './listar.js';
 
@Component({
  selector: 'app-listar-archivos-directorio',
  templateUrl: './listar-archivos-directorio.component.html',
  styleUrls: ['./listar-archivos-directorio.component.css']
})

export class ListarArchivosDirectorioComponent implements OnInit {

  files:any;
  
  mostrarAlerta(){
    wtf();
  }

  mostrarVaca(){
    cow();
  }

  
  
  constructor() { 

      

  }

  ngOnInit() {  }
  
  
}
