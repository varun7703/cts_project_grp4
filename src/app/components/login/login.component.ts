import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password);
     
  }

  reloadPage(): void {
    window.location.reload();
  }
  register(){
    this.router.navigate(['/register'])
  }
}