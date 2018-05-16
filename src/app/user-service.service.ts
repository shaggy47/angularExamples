import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';

export class GitUser {
 constructor(
  html_url:string,
  avatar_url:string,
  login:string,
  score:string
 ){}
};

@Injectable()
export class UserServiceService {

  constructor(private httpService: HttpClient) {

   }

   getGitData(name:string):Observable<any>{
    return this.httpService.get("https://api.github.com/search/users?q="+name);
   } 

}
