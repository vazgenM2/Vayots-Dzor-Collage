import { Component, OnInit } from '@angular/core';
import { files } from '../files'

@Component({
  selector: 'app-quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss']
})
export class QualityComponent implements OnInit {
  files = files
  constructor() { }

  ngOnInit(): void {
  }

}
