import { Injectable } from '@angular/core';
import {NzNotificationService} from "ng-zorro-antd/notification";
import {Message} from "./message-options";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private notification: NzNotificationService) { }

  create(message: Message) {
    const {type, title, content, options} = message;
    this.notification.create(type, title, content, options);
  }
}
