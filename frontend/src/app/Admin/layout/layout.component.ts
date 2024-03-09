import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  activeindex = 0;
  onClickSideBar(index: number) {
    this.activeindex = index;
  }
}
