import { Component, OnInit } from '@angular/core';
import { files } from '../files'

@Component({
  selector: 'app-stratedic-plan',
  templateUrl: './stratedic-plan.component.html',
  styleUrls: ['./stratedic-plan.component.scss']
})
export class StratedicPlanComponent implements OnInit {
  files = files
  constructor() { }

  ngOnInit(): void {
  }

}
