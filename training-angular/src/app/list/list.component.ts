import { Component, OnInit } from '@angular/core';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.myMethod();
  }

}
