import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  signupForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService, 
    private router: Router
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      const { username, email, password } = this.signupForm.value;
      const signupRequest: any = { pseudo: username, email, password };
      this.authService.register(signupRequest).subscribe(
        (response: any) => {
          console.log(response);
          // Afficher un message de succès
        },
        (error: any) => {
          console.error(error);
          // Afficher un message d'erreur
        }
      );
    }
  }
  goToSignin() {
    this.router.navigate(['/signin']);
  }

}
