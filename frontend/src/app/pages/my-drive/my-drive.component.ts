import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-my-drive',
  templateUrl: './my-drive.component.html',
  styleUrls: ['./my-drive.component.scss']
})
export class MyDriveComponent {
  @HostListener('contextmenu', ['$event'])
  onRightClick(event: any) {
    event.stopPropagation();
    console.log(2);
  }
}
