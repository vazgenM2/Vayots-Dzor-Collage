import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LanguageService } from '../services/language.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  sliderImgs = [
    './assets/qolej.jpg',
    './assets/qolej2.jpg',
    './assets/qolej3.jpg',
    './assets/qolej5.jpg',
    './assets/qolej6.jpg',
    './assets/qolej7.jpg',
    './assets/qolej8.jpg',
    './assets/qolej9.jpg',
    './assets/qolej10.jpg',
    './assets/qolej11.jpg',
    './assets/qolej12.jpg',
  ]
  
  smallPhotoes = document.getElementsByClassName('link-img')
  currentImg = 0

  i = 0
  src = this.sliderImgs[this.i]
  @ViewChild('slider') imgslider: ElementRef;
  @ViewChild('welcome') welcomeWord: ElementRef;  
  
  slide(a) {
    if(a) {
      if(this.i !== this.sliderImgs.length-1) this.i++
      else this.i = 0
    }
    else if(this.i !== 0) this.i--
    else this.i = this.sliderImgs.length-1
    if(a) this.imgslider.nativeElement.style.animation = 'sliderLeft 0.8s'
    else this.imgslider.nativeElement.style.animation = 'sliderRight 0.8s'
    setTimeout(()=>{
      this.src = this.sliderImgs[this.i]
    },300)
    setTimeout(()=>{
      this.imgslider.nativeElement.style.animation = 'none'
    },1000)
  }
  
  changeSelectedImg(idx) {
    for(let i = 0; i < this.smallPhotoes.length; i++) {
      this.smallPhotoes[i].classList.remove('selected')
    }
    this.smallPhotoes[idx]?.classList.add('selected')
  }

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

    for(let i = 0; i < document.getElementsByClassName('link-img').length; i++) {
      let current = document.getElementsByClassName("link-img")[i]
      current.addEventListener('click',()=>{
        if(window.matchMedia("(max-width: 523px)").matches) {
          window.scrollTo(0,380)
        }
        else {
          window.scrollTo(0,0)
        }
      })
    }

    let a = setInterval(()=>{
      if(this.i !== this.sliderImgs.length-1) this.i++
      else this.i = 0
      // this.imgslider.nativeElement.style.animation = 'sliderLeft 0.8s ease'
      setTimeout(()=>{
        this.src = this.sliderImgs[this.i]
      },300)
      setTimeout(()=>{
        this.imgslider.nativeElement.style.animation = 'none'
      },1000)
    },8000)

    let s = setInterval(()=>{
      if(pageYOffset+560 >= this.welcomeWord.nativeElement.offsetTop) {
        this.welcomeWord.nativeElement.style.opacity = '1'
        this.welcomeWord.nativeElement.style.animation = 'border 0.75s infinite step-start, print 2s steps(11)'
        clearInterval(s)
        setTimeout(()=>{
          this.welcomeWord.nativeElement.style.borderRight = 'none'
          this.welcomeWord.nativeElement.style.animation = 'none'
        },3000)
      }
    },100)

    
    let imgTimer = setInterval(()=>{
      if(this.smallPhotoes[0]) {
        if(window.matchMedia("(max-width: 800px)").matches) {
          this.changeSelectedImg(this.currentImg)
          if(this.currentImg == this.smallPhotoes.length - 1) this.currentImg = 0
          else this.currentImg++
        }
        else {
          for(let i = 0; i < this.smallPhotoes.length; i++) {
            this.smallPhotoes[i].classList.remove('selected')
          }    
        }
      }
      else this.currentImg = 0
    },3500)
  }

}