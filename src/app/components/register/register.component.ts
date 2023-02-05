import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import User from 'src/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) { }
  userExist: boolean = false;
  user: User = new User(0, "", "", "", "")
  ngOnInit(): void {
  }
  register() {
    
    this.userService.register(this.user).subscribe(u => {
      if (typeof u === 'boolean')
        this.userExist = true;
      else {
        this.user = new User(0, "", "", "", "")
        sessionStorage.setItem("userId", u.Id as unknown as  string)
        this.router.navigate(['/allRecipes'])
        sessionStorage.setItem("login", "true");
        this.userService.saveUser(u)
      }
    })
  }
}
