import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  token = 'currentSession';

  constructor() {
  }

  getSession() {
    return localStorage.getItem(this.token);
  }

  setSession(session: any) {
    localStorage.setItem(this.token, session);
  }

  signinUser(email: string, password: string) {
    const user = JSON.parse(localStorage.getItem(email));
    if (user && user.password === password) {
      localStorage.setItem(this.token, localStorage.getItem(email));
      return true;
    } else {
      return false;
    }
  }

  signupUser(data: {name: string, email: string, password: string}): boolean {
    if (localStorage.getItem(data.email) === null) {
      localStorage.setItem(
        data.email,
        JSON.stringify(data)
      );
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.setSession(null);
    window.location.reload();
  }

  isAuthenticated() {
    const session = JSON.parse(this.getSession());
    return session !== null && session !== undefined;
  }
}
