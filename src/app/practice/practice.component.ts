import { Component, OnInit } from '@angular/core';
import { files } from '../files'

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
  files = files
  constructor() { }

  ngOnInit(): void {
  }

}
