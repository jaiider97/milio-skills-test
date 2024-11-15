import {Component} from '@angular/core'
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../../assets/vendor/css/pages/page-auth.css'],
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.authService.storeTokens(response); // Almacena los tokens en localStorage
        this.router.navigate(['/home']);  // Redirige a la página principal
      },
      error: (error) => {
        console.error('Error de autenticación:', error);
      }
    });
  }
}
