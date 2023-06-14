import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appMyDriveCard]'
})
export class MyDriveCardDirective {

  constructor() { }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    console.log("card right");
  }
}
