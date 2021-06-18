import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrative',
  templateUrl: './administrative.component.html',
  styleUrls: ['./administrative.component.scss']
})
export class AdministrativeComponent implements OnInit {

  constructor() { }

  adminArr = [
    {name: 'ՈՒսումնական հաստատության տնօրեն', person: 'Արգամ Գագիկի Դովլաթյան'},
    {name: 'Տնօրենի տեղակալ` ուսումնական աշխատանքների գծով', person: 'Խաչանուշ Երեմի Սարգսյան'},
    {name: 'Տնօրենի տեղակալ` կազմակերպադաստիարակչական  աշխատանքի գծով', person: 'Էլյա Նահապետի Սարգսյան'},
  ]

  ngOnInit(): void {
  }

}
