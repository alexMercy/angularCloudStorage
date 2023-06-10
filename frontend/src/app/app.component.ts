import {Component, HostListener} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  @HostListener('body:contextmenu', ['$event'])
  onRightClick(event: any) {
    event.preventDefault();
    console.log("1");
  }
}
