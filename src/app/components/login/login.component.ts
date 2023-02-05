import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import User from 'src/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  arrAllUsers: User[];
  user: User = new User(0, "", "", "", "");
  tryLogin: boolean = false;
  constructor(public userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(us => this.arrAllUsers = us);
  }
  ngOnDestroy(): void {

  }
  login() {
    this.userService.login(this.user).subscribe(
      result => {
        if (typeof result === "boolean")
          if (result == false)
            this.router.navigate(['/register']);
          else this.tryLogin = true;
        else {
          sessionStorage.setItem("userId", result.Id as unknown as  string)
          this.router.navigate(['/allRecipes'])
          sessionStorage.setItem("login", "true");
          this.userService.saveUser(result)
        }
      }
    );



  }
}
