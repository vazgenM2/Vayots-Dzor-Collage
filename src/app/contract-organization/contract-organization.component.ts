import { Component, OnInit } from '@angular/core';
import { files } from '../files'

@Component({
  selector: 'app-contract-organization',
  templateUrl: './contract-organization.component.html',
  styleUrls: ['./contract-organization.component.scss']
})
export class ContractOrganizationComponent implements OnInit {
  files = files
  constructor() { }

  ngOnInit(): void {
  }

}
