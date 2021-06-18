import { Component, OnInit } from '@angular/core';
import { files } from '../files'

@Component({
  selector: 'app-intership-programs',
  templateUrl: './intership-programs.component.html',
  styleUrls: ['./intership-programs.component.scss']
})
export class IntershipProgramsComponent implements OnInit {
  files = files
  constructor() { }

  ngOnInit(): void {
  }

}
