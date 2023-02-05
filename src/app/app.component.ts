import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Layer from 'src/models/layer';
import Recipe from 'src/models/recipe';
import User from 'src/models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'recepies';
  recipe: Recipe = new Recipe(1, "hfghf", 2, 2, 3, new Date(), [new Layer("fgf", ["dfgfd"])], ["gfgf"], 2, "5.jpg", false);
  user: string='אורח';
  sub: Subscription;
  constructor(private router: Router, private userService: UserService) {
    this.sub = userService.currentUser.subscribe(u => 
      {this.user = u.Name;
      console.log(";;;"+u.Name)
      }
        
        )
  }
  ngOnInit() {
    sessionStorage.setItem("login", "false")
    sessionStorage.setItem("user", "אורח")
  }
  addRecipe() {
    if (sessionStorage.getItem("login") === 'true')
      this.router.navigate(['/addRecipe']);
    else this.router.navigate(['/login']);

  }
  logOut() {
    sessionStorage.setItem("login", "false");
    sessionStorage.removeItem("userId");
    sessionStorage.setItem("user", "אורח")
    alert("אתה בטוח שברצונך לעזוב?????????")
    this.userService.saveUser(new User(0, "אורח", "", "", ""))
  }
}
