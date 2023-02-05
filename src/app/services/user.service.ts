import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import User from 'src/models/user';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser = new Subject<User>();
  constructor(public http: HttpClient) { }
  routeUrl = `${environment.baseUrl}/user`;
  getAllUsers() {
    return this.http.get<User[]>(`${(this.routeUrl)}/GetAllUsers`);
  }
  getUserById(id: number) {
    return this.http.get<User>(`${this.routeUrl}/GetUserById/${id}`);
  }
  register(r: User) {
    return this.http.post<User>(`${this.routeUrl}/Register`, r);
  }
  login(r: User) {
    return this.http.post<User>(`${this.routeUrl}/Login`, r);
  }
  saveUser(user: User) {
    this.currentUser.next(user);
  }
}
