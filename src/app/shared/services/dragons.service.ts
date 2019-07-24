import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Dragon} from '../models/dragon';

@Injectable({
  providedIn: 'root'
})
export class DragonsService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getAll(): Observable<Dragon[]> {
    return this.httpClient
      .get<Dragon[]>(environment.api)
      .pipe(
        catchError(err => {
          return throwError(err);
        })
      );
  }

  get(id: number): Observable<Dragon> {
    return this.httpClient
      .get<Dragon>(`${environment.api}/${id}`)
      .pipe(
        catchError(err => {
          return throwError(err);
        })
      );
  }

  delete(id: number): Observable<Dragon> {
    return this.httpClient
      .delete<Dragon>(`${environment.api}/${id}`)
      .pipe(
        catchError(err => {
          return throwError(err);
        })
      );
  }

  save(dragon: Dragon): Observable<Dragon> {
    if (!isNaN(dragon.id)) {
      return this.httpClient.put<Dragon>(`${environment.api}/${dragon.id}`, dragon)
        .pipe(
          catchError(err => {
            return throwError(err);
          })
        );
    } else {
      return this.httpClient.post<Dragon>(environment.api, dragon)
        .pipe(
          catchError(err => {
            return throwError(err);
          })
        );
    }
  }
}
