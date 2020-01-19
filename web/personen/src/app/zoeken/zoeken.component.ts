import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {PersonenService} from '../personen.service'

@Component({
  selector: 'app-zoeken',
  templateUrl: './zoeken.component.html',
  styleUrls: ['./zoeken.component.css']
})
export class ZoekenComponent implements OnInit {
  naam = new FormControl('');
  personen;
  constructor(private ps: PersonenService) { }

  ngOnInit() {
  }

  zoek(){
    //console.log(this.naam.value)
    this.ps.zoekPersoon(this.naam.value).then(json => this.personen = json)
  }
}
