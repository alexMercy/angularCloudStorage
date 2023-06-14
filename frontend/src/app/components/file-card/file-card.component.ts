import {Component, Input} from '@angular/core';
import {NzContextMenuService, NzDropdownMenuComponent} from "ng-zorro-antd/dropdown";
import {fileCardContextMenuConfig} from "../../core/definitions/file-card-dropdown.config";

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss']
})
export class FileCardComponent {

  @Input() title = "";

  constructor(private contextMenu: NzContextMenuService) {
  }

  openModal(event: MouseEvent, menu: NzDropdownMenuComponent) {
    this.contextMenu.create(event,menu)
  }

  protected readonly fileCardContextMenuConfig = fileCardContextMenuConfig;
}
