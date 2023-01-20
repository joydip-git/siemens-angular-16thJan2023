import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm?: FormGroup;
  constructor(
    private builder: FormBuilder,
    private authSvc: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = this.builder.group({
      userid: [''],
      password: ['']
    })
  }
  login() {
    const user = <User>this.loginForm?.value
    this.authSvc.authenticate(user).subscribe({
      next: (resp) => {
        sessionStorage.setItem('token', resp)
        const url = this.route.snapshot.queryParams['returnUrl']
        if (url) {
          this.router.navigate([`/${url}`])
        } else {
          this.router.navigate(['/home'])
        }
      }
    })
  }
}
