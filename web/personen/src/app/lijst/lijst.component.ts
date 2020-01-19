import { Component, OnInit } from '@angular/core';
import {PersonenService} from '../personen.service'

@Component({
  selector: 'app-lijst',
  templateUrl: './lijst.component.html',
  styleUrls: ['./lijst.component.css']
})
export class LijstComponent implements OnInit {

  
  personen;
  constructor(private ps:PersonenService) { }

  ngOnInit() {
    this.ps.getPersonen().then(json => this.personen = json)
  }

  requestNaarServer():void{
    this.ps.getPersonen().then(json => console.log(json))
  }
}
