import { Component, OnInit } from '@angular/core';
import { files } from '../files'

@Component({
  selector: 'app-work-group',
  templateUrl: './work-group.component.html',
  styleUrls: ['./work-group.component.scss']
})
export class WorkGroupComponent implements OnInit {
  files = files
  constructor() { }

  ngOnInit(): void {
  }

}
