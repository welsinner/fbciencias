import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {

  @Input() item: any;

  constructor(private router: Router) {}
  
  ngOnInit() {}

  get active(){
    return this.router.url.includes(this.item.url);
  }

}
