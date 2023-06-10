import { Component } from '@angular/core';
import {NzNotificationService} from "ng-zorro-antd/notification";
import {messageType} from "../../core/types";
import {messageOptions as options} from "../../core/message-options";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  constructor(private notification: NzNotificationService) { }

  add(title: string, type: messageType ="info", content = ""): void {
    this.notification.create( type, title, content, options);
  }

}
