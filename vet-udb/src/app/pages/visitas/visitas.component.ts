import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.scss'],
})
export class VisitasComponent implements OnInit {

  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;

  constructor(public router : Router) { 

    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }

  }

  randomTitle='random'

  ngOnInit() {
    console.log(this.router.url)
  }


}
