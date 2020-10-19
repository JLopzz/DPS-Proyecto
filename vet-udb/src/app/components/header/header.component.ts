import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    public fireAuth : FirebaseService
  ) { 
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  user : any
  @Input() title : string

  ngOnInit() { }

}
