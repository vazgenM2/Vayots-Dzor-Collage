import { Component, OnInit } from '@angular/core';
import { files } from '../files'

@Component({
  selector: 'app-research-works',
  templateUrl: './research-works.component.html',
  styleUrls: ['./research-works.component.scss']
})
export class ResearchWorksComponent implements OnInit {

  constructor() { }

  files = files

  ngOnInit(): void {
  }

}
