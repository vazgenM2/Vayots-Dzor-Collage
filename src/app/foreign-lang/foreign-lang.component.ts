import { Component, OnInit } from '@angular/core';
import { files } from '../files'

@Component({
  selector: 'app-foreign-lang',
  templateUrl: './foreign-lang.component.html',
  styleUrls: ['./foreign-lang.component.scss']
})
export class ForeignLangComponent implements OnInit {
  files = files
  constructor() { }

  ngOnInit(): void {
  }

}
