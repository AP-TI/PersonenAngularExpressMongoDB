import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {PersonenService} from '../personen.service'

@Component({
  selector: 'app-toevoegen',
  templateUrl: './toevoegen.component.html',
  styleUrls: ['./toevoegen.component.css']
})
export class ToevoegenComponent implements OnInit {
  profileForm = new FormGroup({
    naam: new FormControl(''),
    geboortedatum: new FormControl(''),
  });;
  constructor(private ps: PersonenService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.profileForm.value)
    this.ps.addPersoon(this.profileForm.value).then(json => console.log(json))

  }

}
