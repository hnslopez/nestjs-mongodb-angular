import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable()
export class RegisterService {
  constructor (private apiService: ApiService) {}

filter(username:string): Observable<any>{
    return this.apiService.post('users/filter/user',{filter:username})
}

register(userForm:any):Observable<any>{
  return this.apiService.post('users/create',{...userForm})
}

}