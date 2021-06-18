import { Component, OnInit } from '@angular/core';
import { files } from '../files'

@Component({
  selector: 'app-laws',
  templateUrl: './laws.component.html',
  styleUrls: ['./laws.component.scss']
})
export class LawsComponent implements OnInit {
  files = files
  constructor() { }

  ngOnInit(): void {
  }

}
