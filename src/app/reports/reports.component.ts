import { Component, OnInit } from '@angular/core';
import { files } from '../files'

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  files = files
  constructor() { }

  ngOnInit(): void {
  }

}
