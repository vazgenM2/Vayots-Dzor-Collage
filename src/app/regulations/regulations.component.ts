import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regulations',
  templateUrl: './regulations.component.html',
  styleUrls: ['./regulations.component.scss']
})
export class RegulationsComponent implements OnInit {

  constructor() { }

  next =()=>{
    if(document.getElementById("download-div1").style.display=="block"){

       document.getElementById("download-div1").style.display="none"
       document.getElementById("download-div2").style.display="block"
      //  document.getElementById("previous").classList.remove('activebtn')
      //  document.getElementById("next").classList.add('activebtn')

    }
  }
  prev =()=>{
    if(document.getElementById("download-div2").style.display=="block"){

       document.getElementById("download-div2").style.display="none"
       document.getElementById("download-div1").style.display="block"
      //  document.getElementById("next").classList.remove('activebtn')
      //  document.getElementById("previous").classList.add('activebtn')
    }
  }


  ngOnInit(): void {
    document.getElementById("download-div1").style.display="block"
    document.getElementById("download-div2").style.display="none"
  }

}
