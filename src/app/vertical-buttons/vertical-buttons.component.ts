import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-buttons',
  templateUrl: './vertical-buttons.component.html',
  styleUrls: ['./vertical-buttons.component.css']
})
export class VerticalButtonsComponent implements OnInit {

  localDrive(){
    //document.getElementById("flat-tree").innerHTML = "<tree-flat-overview-example></tree-flat-overview-example>";
    let l = document.getElementById("flat-tree");
    let d = document.getElementById("drive-logo");
    let g = document.getElementById("gmail-logo");
        
    l.style.display = "block";
    g.style.display = "none";
    d.style.display = "none";

    /*
    if(x.style.display === "none"){
      x.style.display = "block";
    } else{
      x.style.display = "none";
    }
    */

  }

  googleDrive(){
    let l = document.getElementById("flat-tree");
    let d = document.getElementById("drive-logo");
    let g = document.getElementById("gmail-logo");
        
    l.style.display = "none";
    g.style.display = "none";
    d.style.display = "block";
    
  }

  gmailDrive(){
    let l = document.getElementById("flat-tree");
    let d = document.getElementById("drive-logo");
    let g = document.getElementById("gmail-logo");
        
    l.style.display = "none";
    g.style.display = "block";
    d.style.display = "none";
  }

  constructor() { }

  ngOnInit() {
  }

}
