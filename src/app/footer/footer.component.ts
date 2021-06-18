import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  phoneIcon = document.getElementsByClassName('phoneIcon')
  phoneNum = document.getElementsByClassName('phonenumber')
  
  constructor(public languageService: LanguageService) {}
  

  getlang() {
    for(let key in this.languageService.langArr) {
      if(document.querySelector(`.lng-${key}`)) {
        document.querySelector(`.lng-${key}`).innerHTML = this.languageService.langArr[key][this.languageService.currentLang]
      }
    }
  }

  ngOnInit(): void {
    this.getlang()
    document.querySelector('div').style.display = 'none'

    for(let i = 0; i < document.getElementsByClassName('menu-item').length; i++) {
      let current = document.getElementsByClassName("menu-item")[i]
      current.addEventListener('click',()=>{
        if(window.matchMedia("(max-width: 523px)").matches) {
          window.scrollTo(0,380)
        }
        else {
          window.scrollTo(0,0)
        }
      })
    }
  }

}
