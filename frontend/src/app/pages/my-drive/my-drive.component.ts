import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-my-drive',
  templateUrl: './my-drive.component.html',
  styleUrls: ['./my-drive.component.scss'],
})
export class MyDriveComponent {

  cardCount = Array.from({length: 115}).map((v,i) => i);

  constructor() {
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    console.log(this.cardCount);
  }



}
