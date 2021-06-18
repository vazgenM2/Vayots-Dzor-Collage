import { transition } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VayocDzorCollage';

  @ViewChild('totop') totop;

  scrollTopBtn = document.getElementsByClassName('totop')

  ngOnInit() {
    setTimeout(()=>{
      setInterval(()=>{
        if(pageYOffset > 10) {
        this.totop.nativeElement.style.display = 'flex'
      }
      else this.totop.nativeElement.style.display = 'none'
      },100)
      this.totop.nativeElement.addEventListener('click', function() {
      window.scrollTo(0,0)
    })
  },0)
  }

}
