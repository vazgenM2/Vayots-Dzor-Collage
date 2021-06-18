import { Component, OnInit } from '@angular/core';
import { files } from '../files'

@Component({
  selector: 'app-collaboration',
  templateUrl: './collaboration.component.html',
  styleUrls: ['./collaboration.component.scss']
})
export class CollaborationComponent implements OnInit {

  constructor() { }

  files = files

  ngOnInit(): void {
  }

}
