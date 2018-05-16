import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'users',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input('user-list')
  listOfUsers:any[];

  constructor() { }

  ngOnInit() {
    
  }

}
