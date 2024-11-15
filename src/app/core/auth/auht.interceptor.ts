import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { catchError, switchMap, map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.authService.getAccessToken();
    let clonedRequest = req;

    // Si el token de acceso existe, lo añadimos a las cabeceras
    if (accessToken) {
      clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    }

    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) { // Si el error es de no autorizado (token expirado)
          const refreshToken = this.authService.getRefreshToken();
          if (refreshToken) {
            // Intentamos refrescar el token
            return this.authService.refreshToken(refreshToken).pipe(
              switchMap((tokens) => {
                this.authService.storeTokens(tokens);
                const newRequest = req.clone({
                  setHeaders: {
                    Authorization: `Bearer ${tokens.access_token}`
                  }
                });
                return next.handle(newRequest);  // Reintenta la solicitud original con el nuevo token
              }),
              catchError((refreshError) => {
                // Si el refresh también falla, podemos manejarlo como un logout
                this.authService.logout();
                return of(refreshError);  // Devuelve un error manejado
              })
            );
          }
        }
        // Si el error no es de tipo 401, devolvemos el error original
        return of(error);  // Evitamos que se propague el error no manejado
      }),
      map(event => {
        // Aquí podemos mapear otros tipos de evento si es necesario
        return event;
      })
    );
  }
}
