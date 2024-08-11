import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.css'
})
export class ContactmeComponent {
  onSubmit(form:NgForm){
    console.log(form);
    if(form.valid)
    {
      alert("message sent successfully");
    }
    else{
      form.reset();
    }
  }
}
