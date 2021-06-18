import { Component, OnInit } from '@angular/core';
import { files } from '../files'

@Component({
  selector: 'app-contract-student',
  templateUrl: './contract-student.component.html',
  styleUrls: ['./contract-student.component.scss']
})
export class ContractStudentComponent implements OnInit {
  files = files
  constructor() { }

  ngOnInit(): void {
  }

}
