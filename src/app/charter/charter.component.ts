import { Component, OnInit } from '@angular/core';
import { files } from '../files'

@Component({
  selector: 'app-charter',
  templateUrl: './charter.component.html',
  styleUrls: ['./charter.component.scss']
})
export class CharterComponent implements OnInit {
  files = files
  constructor() { }

  ngOnInit(): void {
  }

}
