import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/map';

import { UserServiceService, GitUser} from '../user-service.service';

@Component({
  selector: 'userSearch',
  templateUrl: './usersearch.component.html',
  styleUrls: ['./usersearch.component.css']
})
export class UsersearchComponent implements OnInit {
  searchControl = new FormControl();
  searchTerm:string;
  searchData:any[];


  constructor(private userService:UserServiceService){
    
  }

  ngOnInit(){
    this.searchControl.valueChanges
    .filter(d=>d.length >=3)
    .debounceTime(3000)
    .distinctUntilChanged()
    .subscribe(value => {
      this.searchTerm = value;
      this.userService.getGitData(this.searchTerm)
      .map(data=>{
      return data.items;
     })
     .subscribe(data=>{
      console.log(data);
      this.searchData = data;  
     });
      
    });
  }

}

