import { Component } from '@angular/core';
import {MessageService} from "../../core/messages/message.service";
import {Message} from "../../core/messages/message-options";
import {EXAMPLE_TEST_ERROR, EXAMPLE_TEST_SUCCESS} from "../../core/messages/message.list";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  protected readonly EXAMPLE_TEST_SUCCESS = EXAMPLE_TEST_SUCCESS;
  protected readonly EXAMPLE_TEST_ERROR = EXAMPLE_TEST_ERROR;
  constructor(private messageService: MessageService) { }

  add(message: Message): void {
    this.messageService.create(message);
  }
}
