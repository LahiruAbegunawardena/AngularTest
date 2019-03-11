import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-view-dta',
  templateUrl: './view-dta.component.html',
  styleUrls: ['./view-dta.component.css']
})
export class ViewDtaComponent implements OnInit {


  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.getData().subscribe(res=> {
      console.log('res', res);
    });
  }

}
