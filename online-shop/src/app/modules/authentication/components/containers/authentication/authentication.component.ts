import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { User } from 'src/app/modules/shared/types/users.types';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html'
})
export class AuthenticationComponent  {
  constructor(private authService:AuthService,private router: Router){}

  authenticate(user:User){
    console.log(' Username:', user.username);
    console.log(' Password:', user.password);

    this.authService.login(user)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(["/products"]);
                })        
    }

  }
