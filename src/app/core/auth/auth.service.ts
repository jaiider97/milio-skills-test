import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/auth';  // URL de la API
  private accessTokenSubject = new BehaviorSubject<string | null>(null);
  private refreshTokenSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient, private router: Router) {}

  // Verifica si el código se está ejecutando en el navegador
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  // Método para hacer login
  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post(`${this.apiUrl}/login`, loginData).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }

  // Método para refrescar el token
  refreshToken(refreshToken: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/refresh-token`, { refreshToken }).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }

  // Guardar los tokens en localStorage o en memoria (solo en navegador)
  storeTokens(tokens: { access_token: string, refresh_token: string }): void {
    if (this.isBrowser()) {
      localStorage.setItem('access_token', tokens.access_token);
      localStorage.setItem('refresh_token', tokens.refresh_token);
    }
    this.accessTokenSubject.next(tokens.access_token);
    this.refreshTokenSubject.next(tokens.refresh_token);
  }

  // Recuperar el token de acceso (solo en navegador)
  getAccessToken(): string | null {
    if (this.isBrowser()) {
      return localStorage.getItem('access_token');
    }
    return null;
  }

  // Recuperar el token de refresco (solo en navegador)
  getRefreshToken(): string | null {
    if (this.isBrowser()) {
      return localStorage.getItem('refresh_token');
    }
    return null;
  }

  // Eliminar los tokens al cerrar sesión (solo en navegador)
  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
    }
    this.accessTokenSubject.next(null);
    this.refreshTokenSubject.next(null);
    this.router.navigate(['/login']);  // Redirige a la página de login
  }

  // Verificar si el usuario está autenticado (solo en navegador)
  isAuthenticated(): boolean {
    return this.getAccessToken() !== null;
  }
}
