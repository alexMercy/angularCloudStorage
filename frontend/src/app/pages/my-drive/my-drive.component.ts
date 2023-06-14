import {Component, HostListener} from '@angular/core';
import {NzContextMenuService} from "ng-zorro-antd/dropdown";

@Component({
  selector: 'app-my-drive',
  templateUrl: './my-drive.component.html',
  styleUrls: ['./my-drive.component.scss'],
})
export class MyDriveComponent {

  cardCount = Array.from({length: 115}).map((v,i) => i);

  constructor(private contextMenu: NzContextMenuService) {
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    console.log(this.cardCount);
  }

  openModal(event: MouseEvent, menu: any) {
    this.contextMenu.create(event,menu)
  }

}
