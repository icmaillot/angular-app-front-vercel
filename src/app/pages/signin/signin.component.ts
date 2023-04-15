import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginForm = this.formBuilder.group({
    pseudo: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router 
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      const { pseudo, password } = this.loginForm.value;
      const loginRequest: any = { pseudo, password };
      this.authService.login(loginRequest).subscribe(
        (response: any) => {
          this.authService.setIsLoggedIn(true);

          this.authService.setUserId(response.user)
          this.router.navigate(['/articles']); // redirection vers la page 'articles'
        },
        (error: any) => {
          console.error(error);
          // Afficher un message d'erreur
        }
      );
    }
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}
