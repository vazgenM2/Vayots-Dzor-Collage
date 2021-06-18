import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfessionComponent implements OnInit {

  constructor() { }

  middleprofession = [
    {id: '0411', name: '«Հաշվապահական հաշվառում»', base: ['միջնակարգ ընդհանուր','հիմնական ընդհանուր'], time: ['2  տարի','3  տարի']},
    {id: '1015', name: '«Զբոսաշրջություն»', base: ['միջնակարգ ընդհանուր','հիմնական ընդհանուր'], time: ['2  տարի','3  տարի']},
    {id: '0421', name: '«Իրավագիտություն»', base: ['միջնակարգ ընդհանուր'], time: ['2  տարի']},
    {id: '0721', name: '«Ավտոմոբիլային տրանսպորտի տեխնիկական սպասարկում և նորոգում»', base: ['միջնակարգ ընդհանուր','հիմնական ընդհանուր'], time: ['3  տարի','4  տարի']},
    {id: '0613', name: '«Հաշվողական տեխնիկայի և ավտոմատացված համակարգերի ծրագրային ապահովում»', base: ['միջնակարգ ընդհանուր','հիմնական ընդհանուր'], time: ['3  տարի','4  տարի']},
    {id: '0603', name: '«Ֆինանսներ» /հեռակա ուսուցմամբ', base: ['միջնակարգ ընդհանուր'], time: ['3  տարի']},
  ]
  
  prevprofession = [
    {id: '0721', name: '«Գինեգործություն»', base: ['հիմնական ընդհանուր'], time: ['3  տարի']},
    {id: '0214', name: '«Փայտագործություն»', base: ['հիմնական ընդհանուր'], time: ['3  տարի']},
    {id: '1013', name: '«Խոհարարական գործ»', base: ['հիմնական ընդհանուր','միջնակարգ ընդհանուր'], time: ['3  տարի','1  տարի']},
  ]

  ngOnInit(): void {
  }

}
