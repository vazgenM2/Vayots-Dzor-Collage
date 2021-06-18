import { Component, OnInit, ViewChild } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  lat = 39.76348691696899;
  lng = 45.33098073277278;
  zoom = 17.5

  form: FormGroup;
  @ViewChild('sendbtn') sendbtn;
  @ViewChild('thankyou') thankyou;
  @ViewChild('wrongform') wrongform;

  public clearInps() {
    this.form = new FormGroup({
      fname: new FormControl('',[
        Validators.required,
      ]),
      fphone: new FormControl('',[
        Validators.required,
        Validators.pattern(/\+\d{9,}/),
        Validators.minLength(9),
      ]),
      femail: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      ftitle: new FormControl('',[
        Validators.required,
      ]),
      ftext: new FormControl('',[
        Validators.required,
      ]),
    })
  }

  public sendEmail(e: Event) {
    if(this.form.valid) {
      e.preventDefault();
      this.wrongform.nativeElement.style.display = 'none'
      emailjs.sendForm('service_mtqe37l', 'template_ifmfimd', e.target as HTMLFormElement, 'user_PawZgxQPuXVCpqqzR0WuX')
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
          this.thankyou.nativeElement.style.display = 'block'
          this.clearInps()
          setTimeout(()=>{
            this.thankyou.nativeElement.style.display = 'none'
          },5000)
        }, (error) => {
          this.wrongform.nativeElement.style.display = 'block'
          console.log(error.text);
        });
        this.clearInps()
      }
      else {
        this.wrongform.nativeElement.style.display = 'block'
      }
    }

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      fname: new FormControl('',[
        Validators.required,
      ]),
      fphone: new FormControl('',[
        Validators.required,
        Validators.pattern(/\+\d{9,}/),
        Validators.minLength(9),
      ]),
      femail: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      ftitle: new FormControl('',[
        Validators.required,
      ]),
      ftext: new FormControl('',[
        Validators.required,
      ]),
    })
  }

}
