import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  constructor() { }

  sitesArr = [
    {site:'Usum.am', link:'http://usum.am/', text: 'Թվայնացված գրքեր, հոդվածներ, ռեֆերատներ'},
    {site:'Lib.ysu.am', link:'http://lib.ysu.am/', text: 'ԵՊՀ գրադարան, թվայնացված գրքեր և հոդվածներ'},
    {site:'Library.anau.am', link:'https://library.anau.am/', text: 'ՀԱԱՀ գրադարան,  Էլեկտրոնային գրքեր ըստ բաժինների'},
    {site:'Armeco.am', link:'http://armeco.am/', text: 'Բառարաններ, հոդվածներ, շտեմարաններ, ֆիլմադարան'},
    {site:'Grqamol.am', link:'https://grqamol.am/ ', text: 'Մեջբերումներ, թվայնացված գրքեր, գրքասերների ակումբ'},
    {site:'Grqaser.org', link:'http://grqaser.org/', text: 'Աուդիո և թվայնացված գրքեր'},
    {site:'Boon.am', link:'http://boon.am/', text: 'Առցանց հեռուստատեսություն'},
    {site:'Mkuzak.am', link:'http://www.mkuzak.am/?page_id=193', text: 'ՄԿՈՒ ամսագրեր'},
  ]

  ngOnInit(): void {
  }

}
