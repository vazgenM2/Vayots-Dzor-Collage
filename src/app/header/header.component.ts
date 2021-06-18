import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from '../services/language.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(public languageService: LanguageService) { }

  langs = document.getElementsByClassName('lang')
  phoneIcon = document.getElementsByClassName('phoneIcon')
  phoneNum = document.getElementsByClassName('phonenumber')
  searchItems = document.getElementsByClassName('search-item')
  burger = document.querySelector('.burger')

  isMenu = false
  i = 0
  burgerInner = ['x', '≡']

  burgerBtn() {
    this.isMenu = !this.isMenu
    if (this.i == 0) this.i = 1
    else this.i = 0
  }

  showEnLang = false

  getlang() {
    for (let key in this.languageService.langArr) {
      if (document.querySelector(`.lng-${key}`)) {
        document.querySelector(`.lng-${key}`).innerHTML = this.languageService.langArr[key][this.languageService.currentLang]
      }
    }
  }

  @ViewChild('empty') empty;
  @ViewChild('searchInp') searchInp;
  @ViewChild('searchBtn') searchBtn;
  @ViewChild('btnImg') btnImg;
  @ViewChild('values') values;
  c = 0

  ngOnInit(): void {

    for (let i = 0; i < document.getElementsByClassName('search-item').length; i++) {
      let current = document.getElementsByClassName("search-item")[i]
      current.addEventListener('click', () => {
        if (window.matchMedia("(max-width: 523px)").matches) {
          window.scrollTo(0, 380)
        }
        else {
          window.scrollTo(0, 0)
        }
      })
    }

    for (let i = 0; i < document.getElementsByClassName('toGeneral').length; i++) {
      let current = document.getElementsByClassName("toGeneral")[i]
      current.addEventListener('click', () => {
        if (window.matchMedia("(max-width: 523px)").matches) {
          window.scrollTo(0, 380)
        }
        else {
          window.scrollTo(0, 0)
        }
      })
    }


    setTimeout(() => {
      this.empty.nativeElement.style.display = 'none'
      this.searchInp.nativeElement.style.display = 'none'

      for (let i = 0; i < this.langs.length; i++) {
        this.langs[i].addEventListener('click', () => {
          for (let j = 0; j < this.langs.length; j++) {
            this.langs[j].classList.remove('active')
          }
          this.langs[i].classList.add('active')
          this.languageService.currentLang = this.langs[i].getAttribute('data-value')
          this.getlang()
        })
      }
      this.searchBtn.nativeElement.src = '../assets/search.png'


      this.searchBtn.nativeElement.addEventListener('click', () => {
        if (this.searchInp.nativeElement.style.display == 'none') {
          this.searchInp.nativeElement.style.display = 'block'
          this.searchInp.nativeElement.focus()
          this.btnImg.nativeElement.setAttribute('src', '../assets/close.png');
        }
        else {
          this.btnImg.nativeElement.setAttribute('src', 'https://icon-library.com/images/white-search-icon-transparent-background/white-search-icon-transparent-background-1.jpg')
          this.searchInp.nativeElement.style.display = 'none'
          this.values.nativeElement.style.display = 'none'
        }
      })

      this.searchInp.nativeElement.addEventListener('input', () => {
        if (this.searchInp.nativeElement.value.length > 1) this.values.nativeElement.style.display = 'block'
        else this.values.nativeElement.style.display = 'none'
        this.c = 0
        setTimeout(() => {
          this.values.nativeElement.innerHTML = '<p class="empty" #empty>0 արդյունք</p>'

          let text = this.searchInp.nativeElement.value.toLowerCase()
          for (let i = 0; i < this.searchItems.length; i++) {
            let current = this.searchItems[i]
            if (current.innerHTML.toLowerCase().includes(text) && text != '') {
              if (this.c === 0) {
                this.values.nativeElement.innerHTML = ''
                this.c++
              }
              this.empty.nativeElement.style.display = 'none'
              if (this.values.nativeElement.innerHTML == '<p class="empty" #empty>0 արդյունք</p>') this.values.nativeElement.innerHTML = ''
              let newOpt = document.createElement('a')
              newOpt.innerHTML = this.searchItems[i].innerHTML
              newOpt.style.display = 'block'
              newOpt.setAttribute('routerLinkActive', 'active')
              newOpt.setAttribute('routerLink', this.searchItems[i].getAttribute('routerLink'))
              newOpt.setAttribute('href', this.searchItems[i].getAttribute('routerLink'))
              if (this.searchItems[i].getAttribute('routerLink') == null) newOpt.setAttribute('href', '/error')
              newOpt.style.cursor = 'pointer'
              newOpt.style.textDecoration = 'none'
              newOpt.style.color = '#fff'
              newOpt.style.marginBottom = '10px'
              newOpt.addEventListener('mouseenter', function () {
                newOpt.style.textDecoration = 'underline'
              })
              newOpt.addEventListener('mouseleave', function () {
                newOpt.style.textDecoration = 'none'
              })
              this.values.nativeElement.appendChild(newOpt)
            }
          }
        }, 0)
      })

      this.getlang()

    }, 0)
  }
}
