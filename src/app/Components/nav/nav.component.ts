import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  // for collapse button toggle
  toggle:boolean=false;
  toggler(){
    this.toggle=!this.toggle;
  }

}
