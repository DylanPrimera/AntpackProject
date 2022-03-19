import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private URL: string = 'https://jsonplaceholder.typicode.com/users';
  public user$ = new Subject<any>();

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get(this.URL);
  }

  public getSubUser() {
    return this.user$.asObservable();
  }

  public setSubUser(user: any) {
    return this.user$.next(user);
  }
}
