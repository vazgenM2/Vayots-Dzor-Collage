import { Component, OnInit } from '@angular/core';
import { files } from '../files'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  files = files
  constructor() { }

  ngOnInit(): void {
  }

}
