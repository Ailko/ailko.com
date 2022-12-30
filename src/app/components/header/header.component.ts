import { Component } from '@angular/core';
import {NavigateService} from "../../services/navigate/navigate.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  constructor(protected navigation: NavigateService) {}
}
