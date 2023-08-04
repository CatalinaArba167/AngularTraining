import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/modules/shared/types/users.types';

@Component({
  selector: 'app-authentication-view',
  templateUrl: './authentication-view.component.html',
  styleUrls: ['./authentication-view.component.scss']
})
export class AuthenticationViewComponent {
  username!: string ;
  password!: string ;
  @Output() authenticateEvent = new EventEmitter<User>();
  loginForm!: FormGroup;

  constructor() {
  
}
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4),]),
    });
}

  onSubmit() {
    let user:User={
      username:this.username,
      password:this.password,
    }
    this.authenticateEvent.emit(user);
  }
}
