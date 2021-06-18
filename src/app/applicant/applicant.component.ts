import { Component, OnInit } from '@angular/core';
import { files } from '../files'

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.scss']
})
export class ApplicantComponent implements OnInit {
  files = files
  constructor() { }

  ngOnInit(): void {
  }

}
